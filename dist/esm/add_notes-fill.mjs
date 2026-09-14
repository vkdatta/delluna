export const name="add_notes-fill";
export const id="dl_cc73bca50350485281e3";
export const url=new URL("../icons/A/add_notes-fill.svg?v=189f72298ac6b7ccb352ba009f225e39db6c6769bfae5caeffe23faf4f0f29d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
