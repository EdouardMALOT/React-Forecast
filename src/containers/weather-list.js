import React from 'react'
import { connect } from 'react-redux';
import WeatherGraph from '../components/weather-graph';
//import Gmap from '../components/google-map';

class WeatherList extends React.Component {

  constructor(props) {
      super(props);
      this.renderWeather = this.renderWeather.bind(this);
  }


  renderWeather() {
    return this.props.weatherDatas.map( (data, id) => {

        const tempTab = data.list.map( data => data.main.temp);
        const pressureTab = data.list.map( data => data.main.pressure);
        const humidityTab = data.list.map( data => data.main.humidity);

//<Gmap key={`map${id}`} lng={data.city.coord.lon} lat={data.city.coord.lat} />
        return (
              <tbody key={`tbody ${id}`}>
                  <tr key={`tr1 ${id}`}>
                      <td>{data.city.name},{data.city.country}</td>
                      <td><WeatherGraph color="red" data={tempTab} min={0} max={40}/></td>
                      <td><WeatherGraph color="grey" data={pressureTab} min={900} max={1100}/></td>
                      <td><WeatherGraph color="blue" data={humidityTab} min={0} max={100}/></td>
                  </tr>

                  <tr key={`tr2 ${id}`} className="sub-tab-indication align-center">
                      <td>Now : </td>
                      <td>{data.list[0].main.temp}°C</td>
                      <td>{data.list[0].main.pressure}Pa</td>
                      <td>{data.list[0].main.humidity}%</td>
                  </tr>
              </tbody>
        );

    });
  }

  render() {
    return(
          <div>
          <table className="table table-hover" key={`table`}>
            <thead key={`thead`}>
                  <tr key={`thead tr`}>
                      <th key={`th city`}>City</th>
                      <th key={`th temp`}>Temperature</th>
                      <th key={`th pressure`} >Pressure</th>
                      <th key={`th humidity`}>Humidity</th>
                  </tr>
            </thead>
                {this.renderWeather()}
            </table>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {weatherDatas : state.weatherDatas}
}

export default connect(mapStateToProps)(WeatherList);
