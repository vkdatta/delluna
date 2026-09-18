export const name="odt-fill";
export const id="dl_265477884dfc421a8b0c";
export const url=new URL("../icons/O/odt-fill.svg?v=86d8979d5fef75fc031c4404bf7603740c5e127a8e374bf8ae491c419547e48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
