import React, { Component } from 'react';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getAllWallets();
    }

    render() {
        return (
            <div>
                <h1>THIS IS A DRILL</h1>
            </div>
        )
    }
};

export default Dashboard;