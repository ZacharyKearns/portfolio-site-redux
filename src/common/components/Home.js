import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h1 className="post-title">I am learning <em>Javascript</em>, <em>HTML</em>, and <em>CSS</em> by doing projects with <a href="https://freecodecamp.com" target="_blank">freeCodeCamp.com</a></h1>
    			<p><a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>jQuery</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/caljrimmer/portfolio-redux-app">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;

{/* <div className="post clearfix">

<h2>Companies I have worked with:</h2>

<ul className="clients">
  <li className="goldmans-logo">Goldman Sachs</li>
  <li className="orange-logo">Orange</li>
  <li className="tesco-logo">Tesco</li>
  <li className="timeout-logo">Timeout</li>
  <li className="wiley-logo">John Wiley and Sons</li>
  <li className="covestor-logo">Covestor</li>
  <li className="shipserv-logo">Shipserv</li>
</ul>

</div> */}
