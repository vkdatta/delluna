export const name="arrow_shape_up_stack-fill";
export const id="dl_fa912035293598d797d6";
export const url=new URL("../icons/arrow_shape_up_stack-fill.svg?v=c59d504ed23c156b9df709e4f87a570c4684ee99ee5128307728a2321260bb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
