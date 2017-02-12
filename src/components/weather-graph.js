import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// function average(data) {
//   return _.round(_.sum(data)/data.length);
// }

const WeatherGraph = (props) => {
    return(
      <div>
        <Sparklines data={props.data} min={props.min} max={props.max}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>
    );
}


export default WeatherGraph;
