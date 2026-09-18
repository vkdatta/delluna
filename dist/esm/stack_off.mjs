export const name="stack_off";
export const id="dl_b362ee58b22144698f73";
export const url=new URL("../icons/S/stack_off.svg?v=3d47fe8110ae3fc27e04803645cd34cda71be6c8fffdfdcb56e4d832f68aa98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
