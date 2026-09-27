export const name="toolbox-fill";
export const id="dl_a5f8b44a767fe8b36cb0";
export const url=new URL("../icons/toolbox-fill.svg?v=23c2e9369c3b387b827c84a4ba237d3285761be4551a11385bbf649ab44bd8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
