export const name="perm_scan_wifi-fill";
export const id="dl_3920b18c8894b43179b0";
export const url=new URL("../icons/perm_scan_wifi-fill.svg?v=74319e5dcf4c6db10405f2983a80f2d0d01ce7fd2224d1b41a467c6955c212ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
