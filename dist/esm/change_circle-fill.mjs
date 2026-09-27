export const name="change_circle-fill";
export const id="dl_7659cc78af7f5ebdbecc";
export const url=new URL("../icons/change_circle-fill.svg?v=0ab444188f8a1f128888f26927363610fffe64f9ab638d75d9cb346ebeab3e85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
