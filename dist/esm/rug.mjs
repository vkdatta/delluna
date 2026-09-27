export const name="rug";
export const id="dl_97159992f7c04860acef";
export const url=new URL("../icons/rug.svg?v=452e6c1d0c1779e3b2b109601b1606738dd4d94b563ff844be805a814d0a32c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
