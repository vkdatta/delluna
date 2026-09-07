export const name="sneaker-move-fill";
export const id="dl_3a22af6ddfe942f3afdb";
export const url=new URL("../icons/S/sneaker-move-fill.svg?v=a832dfeabe92d7b8b60150f44e88995486ab82a35b815f4da96747d01d5c306d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
