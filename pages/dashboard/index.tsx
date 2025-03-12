import React, { useState } from 'react';
import {
  Search,
  Dropdown,
  Button,
  ProgressBar,
  Link
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
  PresentationFile
} from '@carbon/icons-react';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

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
          
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <h2>Profile</h2>

            </div>
            
            <div className={styles.profileContent}>
              <div className={styles.avatarContainer}>
                <img 
                  src="/image-3.jpg" 
                  alt="Yash Kolte" 
                  className={styles.avatar} 
                />

              </div>
              
              <h3 className={styles.userName}>Yash Kolte</h3>
              <p className={styles.userRole}>Software Developer</p>
              
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statIcon} style={{ backgroundColor: '#FFE8D9' }}>👥</span>
                  <span className={styles.statValue}>11</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statIcon} style={{ backgroundColor: '#FECDCA' }}>🔴</span>
                  <span className={styles.statValue}>56</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statIcon} style={{ backgroundColor: '#FFF6D9' }}>🏆</span>
                  <span className={styles.statValue}>12</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.taskCards}>
            <div className={styles.taskCard} style={{ background: 'linear-gradient(135deg, #FFF0EE 0%, #FFCECC 100%)' }}>
              <div className={styles.taskCardHeader}>
                <h3>Prioritized tasks</h3>
              </div>
              
              <div className={styles.taskPercentage}>83%</div>
              <p className={styles.taskSubtitle}>Avg. Completed</p>
            </div>
            
            <div className={styles.taskCard} style={{ background: 'linear-gradient(135deg, #E4F7FE 0%, #B1E4FB 100%)' }}>
              <div className={styles.taskCardHeader}>
                <h3>Additional tasks</h3>
              </div>
              
              <div className={styles.taskPercentage}>56%</div>
              <p className={styles.taskSubtitle}>Avg. Completed</p>
            </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        
   
      </div>

      <div className={styles.rightSection}>
        <div className={styles.meetingsSection}>
          <div className={styles.meetingsHeader}>
            <h2 className={styles.sectionTitle}>My meetings</h2>
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
                  
                </div>
              </div>
            ))}
            
            <Link href="/meetings" className={styles.viewAllLink}>
              See all meetings <ArrowRight className={styles.linkIcon} />
            </Link>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Dashboard;