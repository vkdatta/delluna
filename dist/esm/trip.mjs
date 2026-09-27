export const name="trip";
export const id="dl_c2c46463495eb77889f3";
export const url=new URL("../icons/trip.svg?v=54ac092318f76ef733e37b83254b541c418bf97d1a7a7df64c482c32edb9fd41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
