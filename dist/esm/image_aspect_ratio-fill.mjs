export const name="image_aspect_ratio-fill";
export const id="dl_20fa30c03f7d4fc0a502";
export const url=new URL("../icons/image_aspect_ratio-fill.svg?v=754889b42b52720ec8c99ec0746f8d3a94a658d29e6a58e741ab5ce633e04f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
