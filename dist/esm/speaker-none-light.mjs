export const name="speaker-none-light";
export const id="dl_4e291963894a4a049071";
export const url=new URL("../icons/S/speaker-none-light.svg?v=d62a33bb974e570fed02b227fcd87f2979fb9719003342779c3da4508e1537c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
