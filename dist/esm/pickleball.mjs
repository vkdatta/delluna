export const name="pickleball";
export const id="dl_80927f708aa9435b8d33";
export const url=new URL("../icons/pickleball.svg?v=443781a4237213bea9296ede4a2aa9c141e70d3ff0b172ac8f4b826e6a5ed9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
