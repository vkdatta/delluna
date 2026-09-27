export const name="location_home";
export const id="dl_b11c6bc6303d98e24ae7";
export const url=new URL("../icons/location_home.svg?v=b5bb2f65f48c6f0699c79f940ad63d3356a15c89d105a602d640b7077859d578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
