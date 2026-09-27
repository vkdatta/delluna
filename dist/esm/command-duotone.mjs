export const name="command-duotone";
export const id="dl_5684c09964d2432291da";
export const url=new URL("../icons/command-duotone.svg?v=45be0292356df75bd4858ae8153c824bb9d565fcffcc26e3d9536ea2fdc8b903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
