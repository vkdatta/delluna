export const name="calendar-dots-bold";
export const id="dl_fdc9d08564e64410946e";
export const url=new URL("../icons/calendar-dots-bold.svg?v=d7627453d4be4d2c361002793c1673676bd9725e35194b0e6c1c0888699a9d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
