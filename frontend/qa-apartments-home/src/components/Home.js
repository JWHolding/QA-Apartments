import React from 'react';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  
      render(){
        return (
          <div className='pageheader'>
            <div className='row'>
              <div className="col-md-6">
                <h2>QA Apartments</h2>
                <p>
                <NavLink to="/apartments/addApartment" exact activeClassName="active"><button>Add Apartment</button></NavLink>
                </p>
                <p>
                button with add person to apartment <br/>
                <NavLink to="/apartments/addPersonToApartment" exact activeClassName="active"><button>Assign person to apartment</button></NavLink>
                </p>

                <p>notifications</p>
                </div>
              </div>
          </div>
        );
      }
    };


export default Home;