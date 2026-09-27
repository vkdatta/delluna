export const name="group-fill";
export const id="dl_f3c68a8e8d6e7e4c7d86";
export const url=new URL("../icons/group-fill.svg?v=4893bfaa68760ab0a4d82f2fe3d832bca790e1a20da66ee9090cb6ece3e9f3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
