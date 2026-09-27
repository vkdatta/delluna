export const name="edit_location";
export const id="dl_fe24ae33ba3384c7e19a";
export const url=new URL("../icons/edit_location.svg?v=f8c38da3e50966590b56680305af9d505cccc30af2cd6e8de819aa83ffec5079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
