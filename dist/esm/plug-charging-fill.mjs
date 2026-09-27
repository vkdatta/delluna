export const name="plug-charging-fill";
export const id="dl_8e0f362297854018a6e1";
export const url=new URL("../icons/plug-charging-fill.svg?v=8939515c812a1a5cca4952e467531e5ab4ce484b245e258b9c14f4d49c12e2cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
