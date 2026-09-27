export const name="animation-fill";
export const id="dl_96c636b1aca4bf48f609";
export const url=new URL("../icons/animation-fill.svg?v=6235686c2a9c025749204e3d6f99ff60fcf59aee092b18c8101d5752fa75b6cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
