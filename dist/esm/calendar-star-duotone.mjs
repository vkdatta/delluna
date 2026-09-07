export const name="calendar-star-duotone";
export const id="dl_7e1d1cb5b5d4443e8bc2";
export const url=new URL("../icons/calendar-star-duotone.svg?v=468c41ad228ed95073d046b3a1b0375f125fdf74f9d8db0605265355dd3d5d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
