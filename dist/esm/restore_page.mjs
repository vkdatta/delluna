export const name="restore_page";
export const id="dl_dc259c41e88541dc879c";
export const url=new URL("../icons/restore_page.svg?v=ba86e01aa06c654c1e654c8100aa7b748ed60906df03d3d764a8c9f3140d87bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
