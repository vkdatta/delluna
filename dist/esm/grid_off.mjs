export const name="grid_off";
export const id="dl_893534b7d0fb43d78eaa";
export const url=new URL("../icons/G/grid_off.svg?v=d114cc81336e54d6dad9eaee32a67f9896bb4b3449c39596dcd512b22a55ce7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
