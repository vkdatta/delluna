export const name="domain";
export const id="dl_20fb30b3b6c3a4413aaf";
export const url=new URL("../icons/domain.svg?v=fd7765d2f0c3f3f204d3c9def30cf835c75dfda4a0eb928372d9afd5269c9053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
