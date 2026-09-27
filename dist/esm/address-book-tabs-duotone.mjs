export const name="address-book-tabs-duotone";
export const id="dl_f2128345db754b828cb0";
export const url=new URL("../icons/address-book-tabs-duotone.svg?v=71fdf778e0f31a90bcaa0e3d680cbf47134c6e0f8438606fee7e932f046a3f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
