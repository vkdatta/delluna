export const name="settop_component-fill";
export const id="dl_d7878ab274780a46a623";
export const url=new URL("../icons/settop_component-fill.svg?v=4d0db7072515311890447662dbf1249f293bd22250d44aff43da4692642c293e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
