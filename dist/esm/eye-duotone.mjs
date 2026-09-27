export const name="eye-duotone";
export const id="dl_8c9f296442044c1b8f9a";
export const url=new URL("../icons/eye-duotone.svg?v=ce8b6cb793ba93b4bd87eb6045821f1c52aa9119d2d1cbc3b6ab5d1dc9b7f528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
