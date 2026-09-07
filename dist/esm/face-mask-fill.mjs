export const name="face-mask-fill";
export const id="dl_1b5ba973d4ab45f0b13e";
export const url=new URL("../icons/face-mask-fill.svg?v=d595d3f6fc381681e3a5f6391e2b62190dd9c32813022a603e95fbf15f7ca2d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
