export const name="drop-slash-fill";
export const id="dl_34fe4c9bc1b843a2bd37";
export const url=new URL("../icons/drop-slash-fill.svg?v=fd44e8b07a85e98b72581ca08df42d52a6a3692ac943099158b50b0b41c29a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
