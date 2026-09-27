export const name="home_work-fill";
export const id="dl_87325fdb2425e73e537d";
export const url=new URL("../icons/home_work-fill.svg?v=5a64a677a88fc4fa50834e70bc38a2830c8073e4cb911a4e6e0b2a419ca998b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
