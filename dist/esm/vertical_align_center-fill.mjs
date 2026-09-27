export const name="vertical_align_center-fill";
export const id="dl_a86fa95b95546991654b";
export const url=new URL("../icons/vertical_align_center-fill.svg?v=49b0f384023c2e220d46ad8c1e35041a0b0eb62ee23d6bb797484bacf9c0ce29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
