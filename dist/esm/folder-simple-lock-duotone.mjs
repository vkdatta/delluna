export const name="folder-simple-lock-duotone";
export const id="dl_87b61e0ce152487a85fd";
export const url=new URL("../icons/folder-simple-lock-duotone.svg?v=168e91f2155f6a533d12808ca0c979ebef2b50cebdc2b60a60746e1b6aef6e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
