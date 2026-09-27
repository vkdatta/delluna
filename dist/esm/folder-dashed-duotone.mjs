export const name="folder-dashed-duotone";
export const id="dl_34d0cf8d093b44aba03f";
export const url=new URL("../icons/folder-dashed-duotone.svg?v=3e20396904ace1edefda3cfc089460ab4fbb3f4d0a9591d0072076ca6b5009ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
