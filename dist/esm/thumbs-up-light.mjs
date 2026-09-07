export const name="thumbs-up-light";
export const id="dl_07ee1825f30a4d9893f6";
export const url=new URL("../icons/T/thumbs-up-light.svg?v=c1f20e6a68301465fa3adbc9fdc4d5f2173a3d5afa1a3d7ce0fc271dad93ad7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
