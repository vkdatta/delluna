export const name="activity_zone";
export const id="dl_cd322171e83212e2c787";
export const url=new URL("../icons/activity_zone.svg?v=66c6cfe41f45f57ce6168d05c864acc46d230562bb256817272506dd368643b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
