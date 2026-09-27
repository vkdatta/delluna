export const name="format_size-fill";
export const id="dl_0c812617c7b3a4207fd1";
export const url=new URL("../icons/format_size-fill.svg?v=b0b5301a0510c785e2ae0ae2dd8c9dbb96483bf305f648116d4e528389c54a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
