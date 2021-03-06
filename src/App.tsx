import * as React from 'react';

import styled from 'styled-components';
import * as Theme from './styles/theme';

import './App.css';
import { GuildMate } from './components/guild-mate';
import { FlexRow, FlexColumn } from './components/flex-row';
import { Card } from './components/card';
import { Title, SubTitle } from './components/title';

const warmiq = require('./warmiq.png');
const postmalorne = require('./sukipng.png');
const randy = require('./randdy.png');

const Content = styled.div`
   display: flex;
   flex-direction: row;
  //  padding-right: 10%;
   margin-top: 40px;
   padding-left: 6%;
   font-familiy: {${Theme.FONT_FAMILY}}
`;

const HeaderContainer = styled.div`
  margin-left: 10%;
`;

class App extends React.Component {
  render() {
    return (
      <div className={'App'}>

        <header className="App-header">
          <HeaderContainer>
            <FlexRow>
              <FlexColumn>
                <Title title={'Fury of Azeroth'} />
              </FlexColumn>

              <FlexColumn>
                <img src={randy} className="App-logo" alt="logo" />
              </FlexColumn>

              <FlexColumn>
                <SubTitle title={'Art by our one and only Postmalorne'} />
              </FlexColumn>
            </FlexRow>
          </HeaderContainer>
        </header>

        <Content>

          <FlexRow>
            <Card>
              <GuildMate name={'Postmalorne'} img={postmalorne} quote={'I\'m not AMERICAN'} />
              <GuildMate name={'Warmiq'} img={warmiq} quote={'*Jumps off* Ooooh, welp that happened'} />
              <GuildMate name={'Randdy'} img={randy} quote={'*Randdy is now Healer* winks at Postmalorne'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate name={'Duckquack'} img={randy} quote={'Oh look football is on'} />
              <GuildMate name={'Significante'} img={postmalorne} quote={' Food for all ? How ? '} />
              <GuildMate name={'Katjavle'} img={warmiq} quote={'Where did Coven go ???'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate name={'Blindfox'} img={warmiq} quote={'Just chillin'} />
              <GuildMate name={'Denjiz'} img={randy} quote={'Unconditional trust in tanks = dead on pull'} />
              <GuildMate name={'Legretta'} img={postmalorne} quote={'Oh nooo my DPS logs - wipe pls'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate name={'Susheala'} img={postmalorne} quote={'/whisper Warmiq'} />
              <GuildMate name={'Skatan'} img={warmiq} quote={'Skatan has gone offline.'} />
              <GuildMate name={'Badkeybinds'} img={randy} quote={'Am I the only sane person here'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate name={'Whereareu'} img={randy} quote={'/whisper Warmiq *intensifies*'} />
              <GuildMate name={'Shardmantle'} img={postmalorne} quote={'French ISP *facedesk*'} />
              <GuildMate name={'Bolna'} img={warmiq} quote={'Hey Mom say Hi !'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate name={'Dyth'} img={warmiq} quote={'British-ness intensifies'} />
              <GuildMate name={'Zarexina'} img={randy} quote={'*Indistinct shouting in the background*'} />
              <GuildMate name={'Egoraptor'} img={postmalorne} quote={'Papi ?'} />
            </Card>
          </FlexRow>

        </Content>
      </div >
    );
  }
}

export default App;
