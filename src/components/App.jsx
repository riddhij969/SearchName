import React from 'react';
import './App.css';
import Header from './Header';
import ResultsContainer from './ResultsContainer';
import SearchBox from './searchbox';

const name =require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerText: 'Search Name',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        
        this.setState({headerExpanded: inputText.length > 0 ? false : true, 
            suggestedNames: inputText? name(inputText):[],});
    };
    render(){
        
        return (
            <div>
                <Header headerExpanded = {this.state.headerExpanded}headTitle={this.state.headerText}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}



export default App