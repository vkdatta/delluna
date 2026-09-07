export const name="arrow-square-up-right-bold";
export const id="dl_83c3416951d54d2d80ea";
export const url=new URL("../icons/arrow-square-up-right-bold.svg?v=f0b6f5380e381fbcd928bcab3c4c57ef99b916f02f5eaa8f3e2c5f75f7fd635a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
