export const name="hand-fist-duotone";
export const id="dl_f501a5f14b3d471d9bd4";
export const url=new URL("../icons/hand-fist-duotone.svg?v=0ab7d1fb9174e83bafb1b84d84b8afc27188b8d9f60b4adf6813feee5018de54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
