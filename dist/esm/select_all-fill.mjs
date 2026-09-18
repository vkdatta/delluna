export const name="select_all-fill";
export const id="dl_1c99e4ff5a9b42d3893d";
export const url=new URL("../icons/select_all-fill.svg?v=7a2958b2f59a374004fa7c699168e574cd3d057eb95fdec7c1854c0e55b75725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
