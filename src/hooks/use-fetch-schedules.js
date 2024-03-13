import { useState, useEffect } from 'react';

export const useFetchSchedules = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(process.env.REACT_APP_LINK_API+'/v1/schedules')
            const result = await response.json();
            setData(result);
            setIsLoading(false);
          } catch (error) {
            setIsError(error);
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, []);
      

    return { data, isLoading, isError };
};
