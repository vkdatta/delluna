export const name="format_paragraph-fill";
export const id="dl_f5a489dc1a24fdb6ab1e";
export const url=new URL("../icons/format_paragraph-fill.svg?v=a0f96b0384cd8faa4d701fc84c3d66d3e227793eb52d82a3691e819a7d1d42ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
