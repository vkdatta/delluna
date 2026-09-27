export const name="envelope-light";
export const id="dl_1fc8d9ba9cc54da288f2";
export const url=new URL("../icons/envelope-light.svg?v=1e0e85e846dda973474baab826f520b6319c863161dd655db52640fb81d8cd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
