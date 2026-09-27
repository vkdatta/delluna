export const name="gps-fix-thin";
export const id="dl_493c93d3753743b2b806";
export const url=new URL("../icons/gps-fix-thin.svg?v=079442fcefa2a1b14dd44c205876ddc59136e92c8b98f06f151d5e97a377b46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
