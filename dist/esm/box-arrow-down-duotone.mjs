export const name="box-arrow-down-duotone";
export const id="dl_09746bf59c034c88967c";
export const url=new URL("../icons/box-arrow-down-duotone.svg?v=0c31b5af4b2d448e095929a049331ff387d0d73f4653366ba0c1aff6480a0263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
