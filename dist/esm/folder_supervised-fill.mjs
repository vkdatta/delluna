export const name="folder_supervised-fill";
export const id="dl_8fce9868cf9f22a0cc3f";
export const url=new URL("../icons/folder_supervised-fill.svg?v=a7bcf8bf1e90e6eaf9e8504792f7595670989f0ac5c1d0457d5824b30c69bbe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
