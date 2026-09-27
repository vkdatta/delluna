export const name="shipping-container-fill";
export const id="dl_d0f05425e782caa136fe";
export const url=new URL("../icons/shipping-container-fill.svg?v=1d93763d6fc86a16a313d0ec96b2ac25a6306c4d3971dbee4dd5e32a99f07771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
