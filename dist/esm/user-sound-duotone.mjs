export const name="user-sound-duotone";
export const id="dl_b9f1942f2fdd4520b687";
export const url=new URL("../icons/U/user-sound-duotone.svg?v=b02971df8662c653ec9bbe059898eb4af8e18f636d42592dd3c8e1833237272a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
