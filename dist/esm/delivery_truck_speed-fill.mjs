export const name="delivery_truck_speed-fill";
export const id="dl_f4084a5664101f88b733";
export const url=new URL("../icons/delivery_truck_speed-fill.svg?v=79d7b6a6971e7c53b6884bdaeb0e8cb61699ed1d65547f21711bc46b0363f319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
