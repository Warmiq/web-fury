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
              <GuildMate
                inactive={false}
                name={'Postmalorne'}
                img={postmalorne}
                quote={'I\'m not AMERICAN'}
              />
              <GuildMate
                inactive={false}
                name={'Warmiq'}
                img={warmiq}
                quote={'*Jumps off* Ooooh, welp that happened'}
              />
              <GuildMate
                inactive={false}
                name={'Randdy'}
                img={randy}
                quote={'*Randdy is now Healer* winks at Postmalorne'}
              />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate inactive={false} name={'Duckquack'} img={randy} quote={'Oh look football is on'} />
              <GuildMate inactive={false} name={'Significante'} img={postmalorne} quote={' I see all (: '} />
              <GuildMate inactive={false} name={'Katjavle'} img={warmiq} quote={'Where did Coven go ???'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate inactive={true} name={'Blindfox'} img={warmiq} quote={'Just chillin'} />
              <GuildMate
                inactive={true}
                name={'Denjiz'}
                img={randy}
                quote={'Unconditional trust in tanks = dead on pull'}
              />
              <GuildMate inactive={true} name={'Legretta'} img={postmalorne} quote={'Oh nooo my DPS logs - wipe pls'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate inactive={true} name={'Susheala'} img={postmalorne} quote={'/whisper Warmiq'} />
              <GuildMate inactive={true} name={'Skatan'} img={warmiq} quote={'Skatan has gone offline.'} />
              <GuildMate
                inactive={true}
                name={'Badkeybinds'}
                img={randy}
                quote={'*licks Kat*, *licks papa Niels* *licks EVERYONE*'}
              />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate inactive={true} name={'Whereareu'} img={randy} quote={'/whisper Warmiq *intensifies*'} />
              <GuildMate inactive={true} name={'Shardmantle'} img={postmalorne} quote={'French ISP *facedesk*'} />
              <GuildMate inactive={true} name={'Bolna'} img={warmiq} quote={'Hey Mom say Hi !'} />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate
                inactive={false}
                name={'Melien'}
                img={randy}
                quote={'Who wants wisdom ? *gives it to Kat anyway*'}
              />

              <GuildMate inactive={false} name={'Leafeo'} img={postmalorne} quote={'Oh noes my shrooms brb guys'} />
              <GuildMate
                inactive={false}
                name={'Thevic'}
                img={randy}
                quote={'Our silent watcher. Our silent protector'}
              />
            </Card>
          </FlexRow>

          <FlexRow>
            <Card >
              <GuildMate inactive={false} name={'Flip'} img={postmalorne} quote={'Whaaaa ?'} />
              <GuildMate inactive={false} name={'Minxx'} img={warmiq} quote={'Goverment takes care of family'} />
              <GuildMate inactive={true} name={'Dyth'} img={warmiq} quote={'British-ness intensifies'} />
            </Card>
          </FlexRow>

        </Content>
      </div >
    );
  }
}

export default App;
