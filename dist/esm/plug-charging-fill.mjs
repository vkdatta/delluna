export const name="plug-charging-fill";
export const id="dl_8e0f362297854018a6e1";
export const url=new URL("../icons/plug-charging-fill.svg?v=6dd47e70046258f12869aac14f516ed0095936e720b4d8e0e3fca81b9bcc0c59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
