export const name="width_full-fill";
export const id="dl_fe4346b94d686ef19c7b";
export const url=new URL("../icons/width_full-fill.svg?v=f168673862427077f8aa45d6f5ac25bfddb0c93ae154ad060a7cda0cfab83410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
