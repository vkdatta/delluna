export const name="dine_heart-fill";
export const id="dl_efd5095709df4298be7e";
export const url=new URL("../icons/dine_heart-fill.svg?v=095b37edf6bedd088653fc49c23018e95296dc6376fa4e40979b098e0753bd84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
