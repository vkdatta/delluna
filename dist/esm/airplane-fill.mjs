export const name="airplane-fill";
export const id="dl_a382b6676c074bceb84d";
export const url=new URL("../icons/airplane-fill.svg?v=9cbfa01454a38ff61eea73649b7072a98a2ab198f23c21295b03c6d9c1588fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
