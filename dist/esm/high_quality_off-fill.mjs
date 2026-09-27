export const name="high_quality_off-fill";
export const id="dl_a4875c51281a6dea0cf4";
export const url=new URL("../icons/high_quality_off-fill.svg?v=4ee3ba51db099b5688bd88728e4aaae5e2d65afb3667948c67ce13fbdf7ace01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
