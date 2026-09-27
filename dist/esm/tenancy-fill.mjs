export const name="tenancy-fill";
export const id="dl_7984f6f56e7ba5a1e304";
export const url=new URL("../icons/tenancy-fill.svg?v=04f76dbf38fb6253c170ed210974346f7d46ad16061680a86f825781359eb1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
