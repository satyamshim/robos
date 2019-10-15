import React from 'react';

const card = (props) => {
	const {name,id,email} = props;
	return (
 		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
          <img alt = 'robos' src= {`https://robohash.org/${id}?100*100`} />
          <div>
          <h2> {name} </h2>
          <p> {email}</p>
          </div>
         </div>
		);
}

export default card;