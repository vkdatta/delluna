export const name="user-gear-duotone";
export const id="dl_2e415c6890435cd71524";
export const url=new URL("../icons/user-gear-duotone.svg?v=a0b8771fe830733576333853d52e41549d727866ea59b72094af62122b78a032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
