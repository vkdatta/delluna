export const name="screenshot_monitor";
export const id="dl_94c1ad1a6bf3b79c55c2";
export const url=new URL("../icons/screenshot_monitor.svg?v=7e1ab3a6b9693caae1d092cd58bc74c973e5ec742ae5543206a45d96f2d84b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
