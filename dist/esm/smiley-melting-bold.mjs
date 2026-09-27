export const name="smiley-melting-bold";
export const id="dl_6d07d837fb6a52063291";
export const url=new URL("../icons/smiley-melting-bold.svg?v=a5be602c643999b6465f33c99702580e9ed025377d1fcb2a2d79a9d1a2a0a5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
