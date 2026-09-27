export const name="bike_scooter";
export const id="dl_d326c942e8f497b61849";
export const url=new URL("../icons/bike_scooter.svg?v=1426b20846f8f76d9c14c861ccfc686ed96ebe88fbedb7eddcccbaa1b871b33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
