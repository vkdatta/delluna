export const name="virus-off";
export const id="dl_7bcd80a58d4246a3939e";
export const url=new URL("../icons/virus-off.svg?v=49fc93a60b878b907a8864f0a7b00f1321e392624231b4c569b85db1677061ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
