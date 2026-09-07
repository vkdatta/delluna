export const name="arrow-u-left-up-fill";
export const id="dl_06d4fd124a9548e69aa1";
export const url=new URL("../icons/arrow-u-left-up-fill.svg?v=5588f3380216ec7b1ce35c68a97c8d629cc71010c7aca1568b64d7238ad78d9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
