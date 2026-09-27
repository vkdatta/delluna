export const name="globe_2_cancel-fill";
export const id="dl_fc67abce2ad2bc5004a4";
export const url=new URL("../icons/globe_2_cancel-fill.svg?v=6932677678c1c5cb6f38c4f0a00d57ebece5c65e1b85e6d007242a8dfc4357ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
