export const name="lock-light";
export const id="dl_534bb4c24c7c483c9b88";
export const url=new URL("../icons/lock-light.svg?v=0ec0e2155dd42cc5fd990234ab806600a5aac0ba992fb4687704cf017a00f7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
