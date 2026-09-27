export const name="check-fat-fill";
export const id="dl_681192422b224cd3be66";
export const url=new URL("../icons/check-fat-fill.svg?v=adac8c9973b5d9cf35d3bd0b73034c3d0d16ddb1b78c77f7124c967f0050e936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
