export const name="on_device_training-fill";
export const id="dl_b32a6227d47f3e5a7658";
export const url=new URL("../icons/on_device_training-fill.svg?v=800216d9cc30bff0a6e316b90ab20ce50ed828b262dca70329cd075bee85a28b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
