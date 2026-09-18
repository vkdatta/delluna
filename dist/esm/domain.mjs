export const name="domain";
export const id="dl_ccf480d13c854e7cab81";
export const url=new URL("../icons/domain.svg?v=fd7765d2f0c3f3f204d3c9def30cf835c75dfda4a0eb928372d9afd5269c9053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
