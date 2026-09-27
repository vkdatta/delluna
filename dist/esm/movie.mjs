export const name="movie";
export const id="dl_d9fbcd781a34671cd1fb";
export const url=new URL("../icons/movie.svg?v=d44dc7219d5931ad21ac1fa522dfd1d272a79a8c20ca2c912048a6af9d84ad98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
