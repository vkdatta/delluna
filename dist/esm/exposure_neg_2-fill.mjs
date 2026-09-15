export const name="exposure_neg_2-fill";
export const id="dl_ec8238b2182a43178828";
export const url=new URL("../icons/E/exposure_neg_2-fill.svg?v=027392d770c2f9b3bc71f32196a113ea802ecec9da77d793119e05eccfc234df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
