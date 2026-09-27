export const name="lucid_1-amphora";
export const id="dl_7aa6e1e92d324d059fd5";
export const url=new URL("../icons/lucid_1-amphora.svg?v=71674478319e44f21a9915aeff44ebd3750983653872dc6fcf194c56f5c3086b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
