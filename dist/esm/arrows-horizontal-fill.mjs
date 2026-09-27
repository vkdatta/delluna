export const name="arrows-horizontal-fill";
export const id="dl_8806353c4725496188e0";
export const url=new URL("../icons/arrows-horizontal-fill.svg?v=1ac144619228b9c35816a27493c70eac0d5b60ffe9825d4b340b9b2450cd6d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
