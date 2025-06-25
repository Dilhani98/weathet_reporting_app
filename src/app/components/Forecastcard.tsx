

interface WeatherApiData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    humidity: number;
    feelslike_c: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
  };
}



export default function Forecastcard({ data }: { data: WeatherApiData }) {
  return (
    <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-xl p-6 w-80 shadow-lg">
      <h2 className="text-2xl font-bold text-center">{data.location.name}</h2>
      <p className="text-center uppercase text-sm mt-2">{data.current.condition.text}</p>
      <div className="flex justify-center my-4">
        <img
          src={`https:${data.current.condition.icon}`}
          alt="weather"
        />
      </div>
      <p className="text-4xl font-semibold text-center">{data.current.temp_c.toFixed(1)}°C</p>
      <div className="flex justify-between text-sm mt-4 px-2">
        <div>
          Feels Like<br />
          <strong>{data.current.feelslike_c.toFixed(1)}°C</strong>
        </div>
        <div>
          Humidity<br />
          <strong>{data.current.humidity}%</strong>
        </div>
      </div>
    </div>
  );
}
