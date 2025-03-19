import { Carprops, FilterProps } from "@/types";

export async function fetchCars(filter:FilterProps) {

    const {manufacturer,year,model,limit,fuel} = filter;

    const headers = {
        'x-rapidapi-key': '146fe7503dmsh35aefb634e861fbp14d2f4jsn450421c9d9fd',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

    const response = await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car:Carprops,angle?:string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const {make,year,model} = car;

  url.searchParams.append('customer','img');
  url.searchParams.append('make',make);
  url.searchParams.append('modelFamily',model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear',`${year}`);
  url.searchParams.append('angle',`${angle}`);
  return `${url}`
}