// import axios from "axios";

// Clase adaptadora, solo se aplica el cambio en un solo lugar
// Sólo sera afectada una pequeña parte de la app y no en varios lugares.
export class HttpClient {
  async get(url: string) {
    // const { data, status } = await axios.get(url);

    const res = await fetch(url);
    const data = res.json();

    console.log({ status: res.status });
    return { data, status: res.status };
  }
}
