export const name="bell-duotone";
export const id="dl_c76788f0e59f4a20b190";
export const url=new URL("../icons/bell-duotone.svg?v=554b434c35d9c5eaaa53ab7d191dff49877b903e108e779401582d9a6f15bd0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
