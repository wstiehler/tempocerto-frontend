export const getAppointments = async () => {
    return [
        {
            id: 0,
            title: 'Descarga 1',
            locationId: 1,
            startDate: new Date(2024, 2, 11, 9, 30),
            endDate: new Date(2024, 2, 11, 12, 0),
        },
        {
            id: 1,
            title: 'Descarga 2',
            locationId: 2,
            startDate: new Date(2024, 2, 11, 9, 30),
            endDate: new Date(2024, 2, 11, 12, 0),
        },
        {
            id: 2,
            title: 'Descarga 3',
            locationId: 3,
            startDate: new Date(2024, 2, 11, 12, 30),
            endDate: new Date(2024, 2, 11, 14, 30),
        },
        {
            id: 3,
            title: 'Descarga 4',
            locationId: 4,
            startDate: new Date(2024, 2, 15, 9, 30),
            endDate: new Date(2024, 2, 15, 12, 0),
        },
    ];
};

export const getLocations = () => {
  return [
    { text: 'Doca 1', id: 1 },
    { text: 'Doca 2', id: 2 },
    { text: 'Doca 3', id: 3 },
    { text: 'Doca 4', id: 4 },
  ];
};