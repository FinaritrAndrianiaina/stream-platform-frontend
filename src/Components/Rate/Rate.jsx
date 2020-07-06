import React, { Component } from 'react'
import './Rate.css';
export const RatingPlace = (props) =>{

  const rate = (num) => {
    let rating = Array(5);
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        rating[i] = <div key={i} className="rate full"></div>;
      } else {
        rating[i] = <div key={i} className="rate"></div>;
      }
    }
    return rating;
  };
  return (<div className="rating-place">{rate(props.nums)}</div>);
}

export default class Rate extends Component {
    
    render() {
        const transformInt = (number) => {
          const n = String(number);
          if (n.length <= 3) return n;
          const format = (number, n) => {
            const temp = Math.floor(number / 10 ** n);
            const rep = String(number - temp * 10 ** n)[0];
            return String(temp).concat(rep !== "0" ? `,${rep}` : "");
          };
          if (n.length <= 6) return String(format(number, 3)).concat("K");
          if (n.length <= 9) return String(format(number, 6)).concat("M");
          if (n.length <= 12) return String(format(number, 9)).concat("Md");
          return "+999Md";
        };
        return (
          <div className="rating">
            <div className="row">
              <div className="col s6">
                <span>{transformInt(this.props.vues)} vues</span>
              </div>
              <div className="col s6">
                <RatingPlace 
                  nums={this.props.num}
                />
              </div>
            </div>
          </div>
        );
    }
}
