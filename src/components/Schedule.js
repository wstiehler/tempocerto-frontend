import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, GroupingState, IntegratedGrouping, IntegratedEditing, EditingState } from '@devexpress/dx-react-scheduler';
import { Scheduler, Resources, Appointments, AppointmentTooltip, GroupingPanel, DayView, WeekView, MonthView, DragDropProvider, AppointmentForm, Toolbar, DateNavigator, TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import { getAppointments, getLocations } from '../hooks/api';


const Schedule = (props) => {
  const [data, setData] = useState([]);
  const [currentView, setCurrentView] = useState('day');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    getAppointments()
      .then(appointments => {
        const modifiedAppointments = appointments.map(appointment => ({
          ...appointment,
          startDate: new Date(appointment.startDate.getFullYear(), appointment.startDate.getMonth() - 1, appointment.startDate.getDate()),
          endDate: new Date(appointment.endDate.getFullYear(), appointment.endDate.getMonth() - 1, appointment.endDate.getDate())
        }));
        setData(appointments);
        //setData(modifiedAppointments);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const handleCommitChanges = ({ added, changed, deleted }) => {
    setData((prevData) => {
      let newData = [...prevData];
      if (added) {
        const startingAddedId = newData.length > 0 ? newData[newData.length - 1].id + 1 : 0;
        newData = [...newData, { id: startingAddedId, ...added }];
      }
      if (changed) {
        newData = newData.map((appointment) =>
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
        );
      }
      if (deleted !== undefined) {
        newData = newData.filter((appointment) => appointment.id !== deleted);
      }
      return newData;
    });
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
    props.onDateChange(date);
  };



  return (
    <Paper>
      <Scheduler data={data} currentDate={currentDate}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={handleCommitChanges} />
        <GroupingState grouping={[{ resourceName: 'locationId' }]} />

        <Toolbar />
        {currentView === 'day' && <DayView startDayHour={8} endDayHour={18} intervalCount={1} />}
        {currentView === 'week' && <WeekView />}
        {currentView === 'month' && <MonthView />}
        <Appointments />
        <Resources data={[{ fieldName: 'locationId', title: 'Doca', instances: getLocations() }]} mainResourceName="locationId" />

        <IntegratedGrouping />
        <IntegratedEditing />

        <AppointmentTooltip showOpenButton />
        <AppointmentForm />
        <GroupingPanel />
        <DragDropProvider />
        <DateNavigator onNavigate={handleDateChange} />
        <TodayButton />

        
      </Scheduler>
    </Paper>
  );
};

export default Schedule;
