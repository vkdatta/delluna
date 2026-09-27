export const name="macro_auto-fill";
export const id="dl_fe334bb72836cd0cc50e";
export const url=new URL("../icons/macro_auto-fill.svg?v=7352b9a2ef27a2f121cfcb09103e16e3c93ced6d7c14888578b17b7167ea9265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
