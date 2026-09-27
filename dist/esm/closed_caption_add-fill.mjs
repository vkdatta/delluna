export const name="closed_caption_add-fill";
export const id="dl_5654568141e2e7e71c34";
export const url=new URL("../icons/closed_caption_add-fill.svg?v=215e3f18c2295dd62aa1ab4e5c1185851ed98b5a8dd8a0c1a8bee46361931d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
