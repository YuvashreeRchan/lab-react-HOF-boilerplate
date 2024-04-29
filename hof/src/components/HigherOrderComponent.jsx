import React from "react";
import './styles.css';

class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => 
        (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderUserType =(userType) =>{
        const data = this.state.userData;
        const filterData = data.filter((item) => item.user_type == userType);
        const mapRows = filterData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderNameJ =() =>{
        const data = this.state.userData;
        const filterData = data.filter((user) => user.name.startsWith("J"));
        const mapRows = filterData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderAge =() =>{
        const filterData = this.state.userData.filter((user) => user.age>28 && user.age <= 50);
        const mapRows = filterData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderTotalyrs =()=>{
        const filterData = this.state.userData.filter((user) => user.user_type === 'Designer');
        const totalyrs = filterData.reduce((total, user) => total + user.years, 0);
        return totalyrs;
    }

    render() {
        return (
        <React.Fragment>
            <h1 className="heading">Display all items</h1>
            <div className="display-box">
                <ul>{this.renderItems()} </ul>
            </div>

            <h1 className="heading">Display data based on UserType</h1>
            <div className="display-box">
                <ul>{this.renderUserType('Designer')}</ul>
            </div>

            <h1 className="heading">Filter all data starting with letter J</h1>
            <div className="display-box">
                <ul>{this.renderNameJ()}</ul>
            </div>

            <h1 className="heading">Filter all data with age greater than 28 and less than or equal to 50</h1>
            <div className="display-box">
                <ul>{this.renderAge()}</ul>
            </div>

            <h1 className="heading">Find the total years of the designer</h1>
            <div className="display-box">
            <ul>{this.renderTotalyrs()}</ul>     
            </div>
        
        </React.Fragment>);
}}

export default HigherOrderComponent;