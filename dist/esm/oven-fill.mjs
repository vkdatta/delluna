export const name="oven-fill";
export const id="dl_001353dba91b48ef90a1";
export const url=new URL("../icons/oven-fill.svg?v=732f3ce098b2482ad80aa1c39c8d11968a6be23e6b5c432684217e046a75f505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
