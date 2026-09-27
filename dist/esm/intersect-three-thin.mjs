export const name="intersect-three-thin";
export const id="dl_16f0b7fb3ca04ebb9814";
export const url=new URL("../icons/intersect-three-thin.svg?v=708c3838df6bb58d56906512cdeb795b463f32c0905b62842e165bed126f7d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
