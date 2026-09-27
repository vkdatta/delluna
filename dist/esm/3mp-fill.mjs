export const name="3mp-fill";
export const id="dl_bc690e007fe20ed490ff";
export const url=new URL("../icons/3mp-fill.svg?v=dad310024a4111df54cdbe2e9e543dcadd700d2e64537d14bf8921db06aee848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
