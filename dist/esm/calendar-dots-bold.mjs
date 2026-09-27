export const name="calendar-dots-bold";
export const id="dl_fdc9d08564e64410946e";
export const url=new URL("../icons/calendar-dots-bold.svg?v=87fcff3f29a69a67caf6a5d36a06070b8c1f6fb70d639e2de628902f3ad01c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
