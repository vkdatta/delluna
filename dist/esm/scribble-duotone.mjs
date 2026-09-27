export const name="scribble-duotone";
export const id="dl_46e97efd66f4a2ad9d1e";
export const url=new URL("../icons/scribble-duotone.svg?v=7ef3a5f896c4cf66f7879a91e343f10b4f28dba9b5f2780fcf87ae119514bc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
