export const name="dermatology-fill";
export const id="dl_61e9fa12b5fa590c2d86";
export const url=new URL("../icons/dermatology-fill.svg?v=adb0c91dfe83a0b481e34d1382bf7a348a172626d58bcd4c495369532a934100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
