export const name="highlight_text_cursor-fill";
export const id="dl_fa289b2e4c8108b12959";
export const url=new URL("../icons/highlight_text_cursor-fill.svg?v=c07ccc14def3c3d241c4900e764a021e57631be44a6742ee76cfce8c31d7a385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
