export const name="link-simple-break-duotone";
export const id="dl_ecb2a4a4cecb407895b8";
export const url=new URL("../icons/link-simple-break-duotone.svg?v=f47d83fe6029f180b918a5cda65ce5ceceb6abf4ab69570ebcd14d0472665291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
