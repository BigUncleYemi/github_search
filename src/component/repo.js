import React, {Component} from 'react'

export default class Repo extends Component {

    constructor(props) {
        super(props)
        this.renderRepo = this.renderRepo.bind(this);
    }
    renderRepo(key){
        return(
            <tr key={key}>
            <td><h4><b>{this.props.repos[key].name}</b></h4><p><a href={this.props.repos[key].html_url}>{this.props.repos[key].full_name}</a></p><p>{this.props.repos[key].description}</p></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <h1>User Repos</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object
                        .keys(this.props.repos)
                        .map(this.renderRepo)
                    }
                </tbody>
            </table>
        );
    }
}