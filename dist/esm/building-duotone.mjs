export const name="building-duotone";
export const id="dl_bdbab3f0ea8444afb471";
export const url=new URL("../icons/building-duotone.svg?v=0d7808032edbefdffb1bff2bad70454a5f5c1871cf09298329e07850b22360af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
