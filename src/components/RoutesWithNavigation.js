import React, { Component } from 'react';
import SideNavigation from './SideNavigation';
import TopNavigation from './TopNavigation';
import Routes from './Routes';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         toggle: false,
         windowWidth: 0,
         currentPage: '',
         sideNavToggled: false,
         breakWidth: 1400
      };
   }
   componentDidUpdate(prevProps, nextProps, snapshot) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
         // this.assessLocation(this.props.location.pathname);
      }
   }
   componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
      // this.assessLocation(this.props.location.pathname);
   }
   componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
   }
   handleResize = () => {
      this.setState({
         windowWidth: window.innerWidth
      });
   };
   toggleSideNav = () => {
      if (this.state.windowWidth < this.state.breakWidth) {
         this.setState({
            sideNavToggled: !this.state.sideNavToggled
         });
      }
   };

   // assessLocation = location => {
   //    let locationString;
   //    switch (location) {
   //       // Dashboards:
   //       case '/properties':
   //          locationString = 'Properties';
   //          break;
   //       default:
   //    }
   //    this.setState({
   //       currentPage: locationString
   //    });
   // };


   render() {
      const dynamicLeftPadding = {
         paddingLeft:
            this.state.windowWidth > this.state.breakWidth ? '240px' : '0'
      };
      return (
         <div className='app'>
            <div>
               <SideNavigation />
            </div>
            <div>
               <TopNavigation />
            </div>
            <main style={{ ...dynamicLeftPadding, margin: '6rem 2%' }}>
               {/* <Routes onChange={() => this.assessLocation()} /> */}
               <Routes />
            </main>
         </div>
      )
   }
}

export default App;