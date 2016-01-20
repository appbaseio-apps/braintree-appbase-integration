/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
const Slider = require('material-ui/lib/slider');
const Appbase = require('appbase-js');

let appbaseRef = new Appbase({
  url: 'https://scalr.api.appbase.io',
  appname: 'braintree',
  username: 'zgtIpZtbi',
  password: 'ab8129e0-e47e-4ab5-a1a9-58fd3583509b'
});

const Main = React.createClass({

	// Set the Initial plan as Free plan
	getInitialState: function() {
		return {
			sliderValue:'10k APIs',
			plan: 'Free Plan',
			sliderValueUnformated: 0 
		};
	},

	// Format number to K,M reference
	numberFormater: function(value){
		if (value >= 1000000) {
	       return (value / 1000000).toFixed(0) + 'M';
	    }
	    else if (value >= 1000) {
	       return (value / 1000).toFixed(0) + 'K';
	    }
	    return value;
	},

	// Update the value of API calls as slider moves
	updateSliderValue: function(event,value){
		this.setState({
			sliderValue: this.numberFormater(value*100000000)
		});
		this.setState({
			sliderValueUnformated:value*100000000
		});
		this.updatePricing(value*100000000)
	},

	// Set the plan name based on the value of API call
	updatePricing: function(value){
		let newPlan = ''
		if (value >= 100000000) {
	       newPlan = 'Enterprise Plan - $1999/month'
	    }
	    else if (value >= 50000000) {
           newPlan = 'Premier Plan - $1299/month'
        }
    	else if (value >= 10000000) {
           newPlan = 'Growth Plan - $799/month'
        }
        else if (value >= 1000000) {
           newPlan = 'Startup Plan - $199/month'
        }
	    else if (value >= 100000) {
           newPlan = 'Hacker Plan - $49/month'
	    }
	    else{
	       newPlan = 'Free Plan'
	    }
	    this.setState({
	    	plan:newPlan 
	    });

	},

	// Update the API call value in Appbase
	updateBraintreePlan: function(event){
	    Materialize.toast('Webhook Triggered. Request to the server made.', 6000)
		let value = this.state.sliderValueUnformated

        let jsonObject = {
        	"count": value
        }
		appbaseRef.index({
		    type: 'test',
		    id: '1',
		    body: jsonObject
		}).on('data', function(response) {
    		let toastContent = 'Plan has been updated! It can be viewed on your dashboard here: <a href="http://braintreepayments.com"> &nbsp; braintreepayments.com </a>'
    		Materialize.toast(toastContent, 8000)
		    console.log(response);
		}).on('error', function(error) {
		    console.log(error);
		});
	},
	render: function(){
		return (
			<div className="row">
				<div className="col s12 center white-text"><h1>Select the number of API calls</h1></div>
				<div className="col s10" id="slider">
					<Slider name="slider1" step={0.00000001} defaultValue={0.0001} onChange={this.updateSliderValue} onDragStop={this.updateBraintreePlan}/>
				</div>
				<div className="col s2 center white-text vertical-center"><h4 id="sliderValue">{this.state.sliderValue}</h4></div>
				<div className="col s12 center white-text"><h4>Your plan has been changed to</h4></div>
				<div className="col s12 center white-text"><h2>{this.state.plan}</h2></div>
			</div>
			);
	},
});

export default Main;

