export const name="low_density-fill";
export const id="dl_c0d9b49ff21c2fafe50f";
export const url=new URL("../icons/low_density-fill.svg?v=3ccaf4312672cb1dd55eab9c15ad6db03fd0b6d9a7bf07ee639f4bbff2cc8a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
