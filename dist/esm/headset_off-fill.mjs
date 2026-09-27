export const name="headset_off-fill";
export const id="dl_bf8ab6749e7f4c7bdfb6";
export const url=new URL("../icons/headset_off-fill.svg?v=115f157f6fcdeffcdb671f10470e498c76702ccad6eb55834131a1bbc110c771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
