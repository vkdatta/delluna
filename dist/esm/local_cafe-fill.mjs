export const name="local_cafe-fill";
export const id="dl_03d9991bda72c533cb03";
export const url=new URL("../icons/local_cafe-fill.svg?v=f35683478366c64a55c894528a7f7317a5754f5e7ec3fcfdcaa364312b73e5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
