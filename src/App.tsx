import * as React from 'react';

import styled from 'styled-components';
import * as Theme from './styles/theme';

import './App.css';
import { GuildMate } from './components/name-bubles';
import { FlexRow } from './components/flex-row';
import { Card } from './components/card';
import { Title } from './components/title';

const warmiq = require('./warmiq.png');
const postmalorne = require('./sukipng.png');
const randy = require('./randdy.png');

const Content = styled.div`
   display: flex;
   flex-direction: row;
   padding-right: 10%;
   padding-left:13%;
   font-familiy: {${Theme.FONT_FAMILY}}
`;

class App extends React.Component {
  render() {
    return (
      <div className={'App'}>

        <header className="App-header">
          <img src={warmiq} className="App-logo" alt="logo" />
          <Title title={'Fury of Azeroth'} />
        </header>

        <Content>
          <FlexRow>

            <Card title={''}>
              <GuildMate name={'Postmalorne'} img={postmalorne} quote={'I\'m not AMERICAN'} />
              <GuildMate name={'Warmiq'} img={warmiq} quote={'*Jumps off* Ooooh, shieeeet'} />
              <GuildMate name={'Randdy'} img={randy} quote={'*Unmutes* *Loud music playing* o shit *Mutes*'} />
            </Card>

          </FlexRow>
          <FlexRow>

            <Card title={''}>
              <GuildMate name={'Postmalorne'} img={postmalorne} quote={'I\'m not AMERICAN'} />
              <GuildMate name={'Warmiq'} img={warmiq} quote={'*Jumps off* Ooooh, shieeeet'} />
              <GuildMate name={'Randdy'} img={randy} quote={'*Unmutes* *Loud music playing* o shit *Mutes*'} />
            </Card>

          </FlexRow>

          <FlexRow>

            <Card title={''}>
              <GuildMate name={'Postmalorne'} img={postmalorne} quote={'I\'m not AMERICAN'} />
              <GuildMate name={'Warmiq'} img={warmiq} quote={'*Jumps off* Ooooh, shieeeet'} />
              <GuildMate name={'Randdy'} img={randy} quote={'*Unmutes* *Loud music playing* o shit *Mutes*'} />
            </Card>

          </FlexRow>

          <FlexRow>

            <Card title={''}>
              <GuildMate name={'Postmalorne'} img={postmalorne} quote={'I\'m not AMERICAN'} />
              <GuildMate name={'Warmiq'} img={warmiq} quote={'*Jumps off* Ooooh, shieeeet'} />
              <GuildMate name={'Randdy'} img={randy} quote={'*Unmutes* *Loud music playing* o shit *Mutes*'} />
            </Card>

          </FlexRow>

        </Content>
      </div >
    );
  }
}

export default App;
