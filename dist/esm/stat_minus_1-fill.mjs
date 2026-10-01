export const name="stat_minus_1-fill";
export const id="dl_1129ca87399b7ab9fd51";
export const url=new URL("../icons/stat_minus_1-fill.svg?v=f97f0983b7282040dce71cfeb769390364fb73f260cc507fba191f54d1c92a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
