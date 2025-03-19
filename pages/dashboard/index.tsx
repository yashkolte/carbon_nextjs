import React, { useState } from 'react';
import {
  Search,
  Dropdown,
  Button,
  ProgressBar,
  Tag,
  Link,
  Tile
} from '@carbon/react';

import {
  ArrowRight,
  Renew,
  Calendar,
  Maximize,
  UserAvatar,
  CheckmarkOutline,
  Add,
  LogoFigma,
  Events,
  PresentationFile,
  FaceActivated,
  FaceDissatisfied,
  FaceNeutral
} from '@carbon/icons-react';
import { useRouter } from 'next/router';
import styles from '@/styles/Dashboard.module.scss';

interface Meeting {
  id: number;
  day: string;
  date: string;
  time: string;
  title: string;
  platform: 'Zoom' | 'Google Meet';
}

interface SkillArea {
  name: string;
  percentage: number;
  color: 'blue' | 'orange';
}

const Dashboard: React.FC = () => {
  // Sample data - in a real app, this would come from props or an API
  const [meetings, setMeetings] = useState<Meeting[]>([
    { id: 1, day: 'Tue', date: '11 Jul', time: '08:15 am', title: 'Quick Daily Meeting', platform: 'Zoom' },
    { id: 2, day: 'Tue', date: '11 Jul', time: '09:30 pm', title: 'John Onboarding', platform: 'Google Meet' },
    { id: 3, day: 'Tue', date: '12 Jul', time: '02:30 pm', title: 'Call With a New Team', platform: 'Google Meet' },
    { id: 4, day: 'Tue', date: '15 Jul', time: '04:00 pm', title: 'Lead Designers Event', platform: 'Zoom' },
  ]);

  const [skills, setSkills] = useState<SkillArea[]>([
    { name: 'Sport Skills', percentage: 71, color: 'orange' },
    { name: 'Blogging', percentage: 92, color: 'blue' },
    { name: 'Leadership', percentage: 33, color: 'orange' },
    { name: 'Meditation', percentage: 56, color: 'blue' },
    { name: 'Philosophy', percentage: 79, color: 'blue' },
  ]);

  const [timeRange, setTimeRange] = useState('Last month');
  const [activeMonth, setActiveMonth] = useState('Sep');

    const router = useRouter();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.leftSection}>
        <div className={styles.header}>
          <div className={styles.welcomeSection}>
          <div className={styles.iconWrapper}>
              <UserAvatar className={styles.homeIcon} onClick={()=> {router.push("/")}}/>
            </div>
            <div>
              <h1 className={styles.welcomeTitle}>Welcome, Yash</h1>
              <p className={styles.welcomeSubtitle}>Your personal dashboard overview</p>
            </div>
          </div>
          
          <div className={styles.searchWrapper}>
            <Search
              placeholder="Search"
              labelText="Search"
              id="dashboard-search"
              size="lg"
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <h2>Profile</h2>
              <Button
                kind="ghost"
                renderIcon={Renew}
                iconDescription="Refresh"
                hasIconOnly
                tooltipPosition="bottom"
              />
            </div>
            
            <div className={styles.profileContent}>
              <div className={styles.avatarContainer}>
              <img 
                  src="/image-3.jpg" 
                  alt="Yash Kolte" 
                  className={styles.avatar} 
                />
                <button className={styles.editAvatar}>
                  <Add />
                </button>
              </div>
              
              <h3 className={styles.userName}>Yash Kolte</h3>
              <p className={styles.userRole}>Software Developer</p>
              
              <div className={styles.stats}>
                <div className={styles.statItem}>
                <FaceActivated size={25} />
                  <span className={styles.statValue}>11</span>
                </div>
                <div className={styles.statItem}>
                <FaceNeutral size={25}/>
                  <span className={styles.statValue}>12</span>
                </div>
                <div className={styles.statItem}>
                <FaceDissatisfied size={25}/>
                  <span className={styles.statValue}>56</span>
                </div>

              </div>
            </div>
          </div>

          <div className={styles.taskCards}>
            
            <Tile id="tile-1" className="taskCard bg-pink">
              <div className={styles.taskCardHeader}>
                <h3>Prioritized tasks</h3>
                <Button
                  kind="ghost"
                  renderIcon={CheckmarkOutline}
                  iconDescription="Check tasks"
                  hasIconOnly
                  tooltipPosition="bottom"
                />
              </div>
              <div className={styles.taskPercentage}>83%</div>
              <p className={styles.taskSubtitle}>Avg. Completed</p>
            </Tile>
            
            <Tile className="taskCard bg-blue">
              <div className={styles.taskCardHeader}>
                <h3>Additional tasks</h3>
                <Button
                  kind="ghost"
                  renderIcon={CheckmarkOutline}
                  iconDescription="Check tasks"
                  hasIconOnly
                  tooltipPosition="bottom"
                />
              </div>
              
              <div className={styles.taskPercentage}>56%</div>
              <p className={styles.taskSubtitle}>Avg. Completed</p>
            </Tile>
          </div>
          
          <div className={styles.trackersCard}>
            <div className={styles.trackersHeader}>
              <div>
                <h3>Trackers connected</h3>
                <p className={styles.trackersSubtitle}>3 active connections</p>
              </div>
              
              <div className={styles.appIcons}>
                <div className={styles.appIcon} style={{ backgroundColor: '#F9F5FF' }}>
                  <LogoFigma />
                </div>
                <div className={styles.appIcon} style={{ backgroundColor: '#EBF5FF' }}>
                  <Events/>
                </div>
                <div className={styles.appIcon} style={{ backgroundColor: '#F5F5F5' }}>
                <PresentationFile />

                <Button
                  kind="ghost"
                  renderIcon={Maximize}
                  iconDescription="More"
                  hasIconOnly
                  tooltipPosition="bottom"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.analyticsSection}>
          <div className={styles.analyticsHeader}>
            <div>
              <h2 className={styles.analyticsTitle}>Focusing</h2>
              <p className={styles.analyticsSubtitle}>Productivity analytics</p>
            </div>
            
            <div className={styles.rangeSelector}>
              <span>Range:</span>
              <Dropdown
                id="time-range"
                titleText=""
                label={timeRange}
                items={['Last week', 'Last month', 'Last 3 months', 'Last year']}
                onChange={({ selectedItem }) => setTimeRange(selectedItem!)}
                size="sm"
              />
            </div>
          </div>
          
          <div className={styles.graphContainer}>
            <div className={styles.monthSelector}>
              {['Aug', 'Sep', 'Oct', 'Nov'].map(month => (
                <button 
                  key={month}
                  className={`${styles.monthButton} ${activeMonth === month ? styles.activeMonth : ''}`}
                  onClick={() => setActiveMonth(month)}
                >
                  {month}
                </button>
              ))}
            </div>
            
            <div className={styles.graph}>
              {/* Here we would typically use a charting library like recharts or d3 */}
              {/* For now, we'll use a placeholder image */}
              <div className={styles.graphPlaceholder}>
                <div className={styles.weekIndicator}>
                  <div className={styles.weekLabel}>
                    <span>Week 8</span>
                    <span className={styles.weekStatus}>Unbalanced</span>
                  </div>
                </div>
                <img src="/focus-graph.svg" alt="Focus analytics graph" className={styles.graphImage} />
              </div>
              
              <div className={styles.graphLegend}>
                <div className={styles.legendItem}>
                  <span className={styles.legendColor} style={{ backgroundColor: '#F04438' }}></span>
                  <span>Maximum of focus</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendColor} style={{ backgroundColor: '#7F56D9' }}></span>
                  <span>Min or lack of focus</span>
                </div>
              </div>
              
              <div className={styles.concentrationScore}>
                <h3 className={styles.scoreValue}>41%</h3>
                <p className={styles.scoreLabel}>Avg. Conc-ion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.meetingsSection}>
          <div className={styles.meetingsHeader}>
            <h2 className={styles.sectionTitle}>My meetings</h2>
            <Button
              kind="ghost"
              renderIcon={Calendar}
              iconDescription="Calendar"
              hasIconOnly
              tooltipPosition="bottom"
            />
          </div>
          
          <div className={styles.meetingsList}>
            {meetings.map(meeting => (
              <div key={meeting.id} className={styles.meetingItem}>
                <div className={styles.meetingDate}>
                  <span className={styles.meetingDay}>{meeting.day}, {meeting.date}</span>
                  <span className={styles.meetingTime}>{meeting.time}</span>
                </div>
                
                <div className={styles.meetingDetails}>
                  <div className={styles.meetingInfo}>
                    <h4 className={styles.meetingTitle}>{meeting.title}</h4>
                    <div className={styles.platformTag}>
                      <div className={`${styles.platformIcon} ${meeting.platform === 'Zoom' ? styles.zoomIcon : styles.meetIcon}`}></div>
                      <span>{meeting.platform}</span>
                    </div>
                  </div>
                  
                  <Button
                    kind="ghost"
                    renderIcon={ArrowRight}
                    iconDescription="Join"
                    hasIconOnly
                    tooltipPosition="bottom"
                  />
                </div>
              </div>
            ))}
            
            <Link href="/meetings" className={styles.viewAllLink}>
              See all meetings <ArrowRight className={styles.linkIcon} />
            </Link>
          </div>
        </div>
        
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Developed areas</h2>
          <p className={styles.skillsSubtitle}>Most common areas of interests</p>
          
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.skillPercentage}>
                    <span>{skill.percentage}%</span>
                    <span className={`${styles.skillDot} ${skill.color === 'blue' ? styles.blueDot : styles.orangeDot}`}></span>
                  </div>
                </div>
                
                <ProgressBar
                  value={skill.percentage}
                  max={100}
                  label=""
                  helperText=""
                  hideLabel
                  className={`${styles.skillProgress} ${skill.color === 'blue' ? styles.blueProgress : styles.orangeProgress}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;