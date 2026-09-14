export const name="add_alert";
export const id="dl_e2299e35100e42d9a889";
export const url=new URL("../icons/A/add_alert.svg?v=99e7ebd52286c9bb0f8b9f267cc35ce56ddddd44090207bd62ab8e9ed46fa756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
