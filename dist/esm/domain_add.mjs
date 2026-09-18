export const name="domain_add";
export const id="dl_abe20766a3c54765bc44";
export const url=new URL("../icons/domain_add.svg?v=fcd2ca0029f9f5368386e9f118894ba0fa66a478f03593392073063ef4e2dc87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
