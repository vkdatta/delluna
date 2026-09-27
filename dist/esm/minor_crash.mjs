export const name="minor_crash";
export const id="dl_4fae5d08e6f947c0d323";
export const url=new URL("../icons/minor_crash.svg?v=06597e1031297a3c93238af5c0a59dc583fe350b32d9bd411a7b41ba1f92455d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
