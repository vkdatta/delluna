export const name="building-apartment-fill";
export const id="dl_4ce899de552f48c89c20";
export const url=new URL("../icons/building-apartment-fill.svg?v=300e7533c70ae7e859b1b1d0800a1087f8f8114472ff0f0068ffc57b11f64548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
