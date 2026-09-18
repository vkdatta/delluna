export const name="map_pin_review";
export const id="dl_8a3d543268cf43cebdef";
export const url=new URL("../icons/M/map_pin_review.svg?v=35db0bf2c19781e395c7323c0beddbc4786234549b243636cc7346ec9fb61bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
