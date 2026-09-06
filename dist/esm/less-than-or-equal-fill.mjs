export const name="less-than-or-equal-fill";
export const id="dl_b7812a039e29443c9b38";
export const url=new URL("../icons/less-than-or-equal-fill.svg?v=7a96c595a654966bfb3784561eccc088f92c7f5034c81a104bbee6826cfbe32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
