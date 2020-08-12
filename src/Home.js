import React from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';

function Home() {
   return (
       <Segment color='green'>
           <Header as='h1' color='green' textAlign='center'>Home</Header>
           <Header as='h3' textAlign='center'>
               <Icon name='check circle' color='green'/>
               Selamat Datang
           </Header>
           <Button color='red' fluid>
               <Icon name='log out'/>
               Keluar
           </Button>
       </Segment>
   );
}

export default Home;
