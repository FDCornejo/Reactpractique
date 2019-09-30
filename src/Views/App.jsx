import React, { Component } from 'react';
import Table from '../Components/Table';
export default class App extends Component {
  state = {
    movies: [
      {
        num: 1,
        name: 'El asesinato de Gianni Versace ',
        year: 2018,

      },
      {
        num: 2,
        name: ' Stranger Thingsh',
        year: 2016,

      },
      {
        num: 3,
        name: ' Unbreakable Kimmy Schmidt',
        year: 2015,

      },
      {
        num: 4,
        name: 'Bodyguard ',
        year: 2018,

      },
      {
        num: 5,
        name: 'Love ',
        year: 2016,

      },
      {
        num: 6,
        name: 'Narcos ',
        year: 2015,

      },
      {
        num: 7,
        name: 'Peaky Blinders',
        year: 2013,

      },
      {
        num: 8,
        name: 'Black Mirror',
        year: 2011,

      },
      {
        num: 9,
        name: 'Bates Motel',
        year: 2013,

      },
      {
        num: 10,
        name: 'Mindhunter ',
        year: 2017,

      },
    ]
  };

  render() {
    var cosas = this.state.movies.map((value, index) => {
      return (
       //console.log(value)
        <Table key={value.num} info={value}></Table>
      )
    });
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://picsum.photos/800/200/?blur" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/800/200/?blur" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/800/200/?blur" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div className="container">
          <h1>Top 10  Netflix serials</h1>
          <div className="row">

            <div className="col-sm-12">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {cosas}
                </tbody>
              </table>

            </div>

          </div>
        </div>

      </div>


    );
  }
}

