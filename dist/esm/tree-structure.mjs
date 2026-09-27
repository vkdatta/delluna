export const name="tree-structure";
export const id="dl_581cbbc2c137c8db532e";
export const url=new URL("../icons/tree-structure.svg?v=0ffa918447c30ab8620c5a572679493a66846c6255e7158e035bc39b41805e7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
