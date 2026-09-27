export const name="edit_calendar";
export const id="dl_44873d758708fbd720c2";
export const url=new URL("../icons/edit_calendar.svg?v=820652f88121334a10457200d570ec81c5dde2dc011296c4de70d17ac81e143f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
