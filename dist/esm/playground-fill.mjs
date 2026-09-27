export const name="playground-fill";
export const id="dl_0c130c6103f184b0080e";
export const url=new URL("../icons/playground-fill.svg?v=5777dbddf926854f16b0a32b18afb020143bee629abf332cd6f80aedfe030f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
