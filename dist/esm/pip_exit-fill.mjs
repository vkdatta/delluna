export const name="pip_exit-fill";
export const id="dl_b02fbf34b1e4741306ed";
export const url=new URL("../icons/pip_exit-fill.svg?v=f87841b6c9b57c9264de9b9f6da38e0337a62c20972953e91f0097737e58c11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
