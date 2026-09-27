export const name="folder-minus";
export const id="dl_89d5071b8baf4f92aa37";
export const url=new URL("../icons/folder-minus.svg?v=f99a261b624916e2d307dcd2a80406c8157dc3e7e18815ce6cd248e9d69ee5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
