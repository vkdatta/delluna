export const name="plug-charging-light";
export const id="dl_f3d986aa69ad4330b5d0";
export const url=new URL("../icons/plug-charging-light.svg?v=755099d760e9eaaf7a182eb366dd5f3d6cc685a5fb3816aa9f23b253b634c203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
