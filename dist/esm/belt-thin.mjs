export const name="belt-thin";
export const id="dl_cfbd2c68aa354a3994a0";
export const url=new URL("../icons/belt-thin.svg?v=7798087e1663c133de347ee5075b8728c5f065bd302cb7c2e4ce8eb3f6d25b7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
