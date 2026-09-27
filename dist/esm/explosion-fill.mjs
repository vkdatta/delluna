export const name="explosion-fill";
export const id="dl_ee129c4c46e34b8106a2";
export const url=new URL("../icons/explosion-fill.svg?v=c769e27a5e89f12b474022e39d120edc12c4aa7c17809886ac6011a1464b0c2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
