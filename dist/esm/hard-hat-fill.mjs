export const name="hard-hat-fill";
export const id="dl_3f164166f73542caa996";
export const url=new URL("../icons/hard-hat-fill.svg?v=ce8a160591983ee884da3d174199efa13e6bb2c39ea647662f3fe9ae16fac5df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
