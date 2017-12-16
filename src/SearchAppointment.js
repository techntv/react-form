import React from 'react';

class SearchAppointment extends React.Component{
    handleSortItem(event){
        
        this.props.handleSort(event.target.id,this.props.orderDir);
    }
    handleSortDir(event){
      this.props.handleSort(this.props.orderBy, event.target.id);
    }
    handleSearch(event){
     
        this.props.onSearch(event.target.value);
     
      
    }
    render(){
        return (
            <div className="row search-appointments">
            <div className="col-sm-offset-3 col-sm-6">
              <div className="input-group">
                <input id="SearchApts" onChange={ this.handleSearch.bind(this)} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a  id="petName" onClick={this.handleSortItem.bind(this)}>Pet Name {this.props.orderBy === 'petName' ? <span className='glyphicon glyphicon-ok'></span> : null}</a></li>
                      <li><a  id="aptDate" onClick={this.handleSortItem.bind(this)}>Date {this.props.orderBy === 'aptDate' ? <span className='glyphicon glyphicon-ok'></span> : null}</a></li>
                      <li><a  id="ownerName" onClick={this.handleSortItem.bind(this)}>Owner {this.props.orderBy === 'ownerName' ? <span className='glyphicon glyphicon-ok'></span> : null}</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a  id="asc" onClick={this.handleSortDir.bind(this)}>Asc {this.props.orderDir === 'asc' ? <span className='glyphicon glyphicon-ok'></span> : null}</a></li>
                      <li><a  id="desc" onClick={this.handleSortDir.bind(this)}>Desc {this.props.orderDir === 'desc' ? <span className='glyphicon glyphicon-ok'></span> : null}</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default SearchAppointment