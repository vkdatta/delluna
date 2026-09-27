export const name="balloon-fill";
export const id="dl_5b115e103a33491e8d5e";
export const url=new URL("../icons/balloon-fill.svg?v=c00df73904bb5f96c332bd009c94f66d1ca110fbde9ea9c5c03eb68444394b35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
