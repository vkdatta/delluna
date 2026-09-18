export const name="single_bed";
export const id="dl_c65c16a7d9fd42c9ab58";
export const url=new URL("../icons/S/single_bed.svg?v=b59e9af05ead9970f739d5ad659b2d8dbcdc74bbcd06b7c589b56da107659859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
