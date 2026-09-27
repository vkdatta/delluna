export const name="media_bluetooth_on-fill";
export const id="dl_ae50ceb02541dcecee3a";
export const url=new URL("../icons/media_bluetooth_on-fill.svg?v=bb1791462d0bc8e7dcd6e52b9af55180b012dddde180982bf1f751a03a57ef4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
