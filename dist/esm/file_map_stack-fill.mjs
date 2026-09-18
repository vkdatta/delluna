export const name="file_map_stack-fill";
export const id="dl_61d738ab64d249489285";
export const url=new URL("../icons/file_map_stack-fill.svg?v=1036e50c6e3841dcf7cf47b7ddcfb867f333a09fcd627feac0cad97c737a2f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
