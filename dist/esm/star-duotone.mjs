export const name="star-duotone";
export const id="dl_d7df5b578ff042e0a5d9";
export const url=new URL("../icons/S/star-duotone.svg?v=d99a65040b32b5da2b50077a15d8b8b5ae90307c1a5bd34771c3f7b21e055835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
