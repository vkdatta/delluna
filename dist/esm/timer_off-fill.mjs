export const name="timer_off-fill";
export const id="dl_5ccb42bca6214752f96e";
export const url=new URL("../icons/timer_off-fill.svg?v=5e2ec2ba18ad6a80b58c2b36915fa37ea64d6285b45cbb6fbef71b4299909681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
