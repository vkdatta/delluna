export const name="nat-fill";
export const id="dl_d2c8fe1467663ef6a0b3";
export const url=new URL("../icons/nat-fill.svg?v=3c27feeff6016b88d1a76ff60079c8bcc37f96cf35fb2095448c2004252f085e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
