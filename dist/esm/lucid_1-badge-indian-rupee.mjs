export const name="lucid_1-badge-indian-rupee";
export const id="dl_e8c274543c814bf6b52f";
export const url=new URL("../icons/lucid_1-badge-indian-rupee.svg?v=fca5281e6bbff94a22e2f5a56cb4abf4f190dea1e324094f078b1603e8437f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
