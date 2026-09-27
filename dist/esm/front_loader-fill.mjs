export const name="front_loader-fill";
export const id="dl_315765ad8ec7cef1f5e4";
export const url=new URL("../icons/front_loader-fill.svg?v=0775f72154dd6095a3a990aef302ef04bcec3bbb87210c1e87da358d26f40b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
