export const name="stack-minus-duotone";
export const id="dl_88f3f98ca931389ec384";
export const url=new URL("../icons/stack-minus-duotone.svg?v=ebbb3a9176b7d9e8586203d868c9b1dc761ccdaad326e9b4c9e1e51ed1ad07fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
