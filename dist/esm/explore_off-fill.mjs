export const name="explore_off-fill";
export const id="dl_6ff31de7ba4e6a97a034";
export const url=new URL("../icons/explore_off-fill.svg?v=05f485aa32467dd0c6a0a4bd6767ff33b6393d6b05f2f2223942236f5dd37a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
