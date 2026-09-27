export const name="data_info_alert-fill";
export const id="dl_c0bd99bdbd0b9a9f1b1c";
export const url=new URL("../icons/data_info_alert-fill.svg?v=a6af47631a3fa6053c35321b3e3c19fc32842094ee409e497d79a198dda85d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
