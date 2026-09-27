export const name="reset_shadow-fill";
export const id="dl_c07da42c107c3e5688a1";
export const url=new URL("../icons/reset_shadow-fill.svg?v=4be0277bd3d2341c065ed5220452797598f357b5c79a9ca489e35f0fc5d0a48e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
