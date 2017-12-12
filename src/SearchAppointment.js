import React from 'react';

class SearchAppointment extends React.Component{
    handleSortItem(event){
        this.props.handleSort(event.target.id,this.props.orderDir);
    }
    render(){
        return (
            <div className="row search-appointments">
            <div className="col-sm-offset-3 col-sm-6">
              <div className="input-group">
                <input id="SearchApts" placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a  id="petName" onClick={this.handleSortItem.bind(this)}>Pet Name</a></li>
                      <li><a  id="aptDate" onClick={this.handleSortItem.bind(this)}>Date</a></li>
                      <li><a  id="ownerName" onClick={this.handleSortItem.bind(this)}>Owner</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a  id="asc" onClick={this.handleSortItem.bind(this)}>Asc</a></li>
                      <li><a  id="desc" onClick={this.handleSortItem.bind(this)}>Desc</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default SearchAppointment