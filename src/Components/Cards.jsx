import React from 'react';

function Card({ info }) {
  return (
    <div className="col-sm-12 col-lg-3 col-md-4">
      <div className="card">
        <img src={info.show.image.medium} className="card-img-top"></img>
        <div className="card-body">
          <h5>{info.show.name}
          </h5>
          <a href={info.show.officialSite} className="btn btn-primary">Go to the page</a>
        </div>
      </div>

    </div>
  )
}
export default Card;