export const name="towel-duotone";
export const id="dl_fc7d25db57de90f47a1a";
export const url=new URL("../icons/towel-duotone.svg?v=2c9d30ec0fb6b2a80244499702dbee78122125e1035f26d0953cb377aeae11e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
