export const name="view_compact_alt-fill";
export const id="dl_3de85136a3f34f91a473";
export const url=new URL("../icons/view_compact_alt-fill.svg?v=fc3a2783ee276beedaf1ca3dba9dc56fd66ecb05a0a1ec10e460986b16d24ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
