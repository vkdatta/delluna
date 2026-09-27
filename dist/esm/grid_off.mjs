export const name="grid_off";
export const id="dl_2a1a2bc17a8cc2d8cf20";
export const url=new URL("../icons/grid_off.svg?v=d114cc81336e54d6dad9eaee32a67f9896bb4b3449c39596dcd512b22a55ce7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
