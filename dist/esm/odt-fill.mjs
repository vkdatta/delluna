export const name="odt-fill";
export const id="dl_8bf615a5e5f6e14d284f";
export const url=new URL("../icons/odt-fill.svg?v=86d8979d5fef75fc031c4404bf7603740c5e127a8e374bf8ae491c419547e48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
