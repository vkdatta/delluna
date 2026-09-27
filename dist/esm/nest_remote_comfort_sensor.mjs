export const name="nest_remote_comfort_sensor";
export const id="dl_fa360ad8cf99480139fb";
export const url=new URL("../icons/nest_remote_comfort_sensor.svg?v=dade2b99a6b95032aeb9fdeb55c1e9094c6e4b3f62f9d3bebd1b9a58332a0569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
