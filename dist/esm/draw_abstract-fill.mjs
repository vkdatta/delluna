export const name="draw_abstract-fill";
export const id="dl_9ac3371660a54090bebf";
export const url=new URL("../icons/D/draw_abstract-fill.svg?v=5b9eac8b9259782c85e87e058ae1563b1db2d378b01d56d1469bc7452ed13eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
