export const name="lucid_2-gpu";
export const id="dl_fb95bcfa515848318491";
export const url=new URL("../icons/lucid_2-gpu.svg?v=10c09c5894f0c7a55e79c6c67c48903606b2ea0bd0948ea533433ccf6fb90ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
