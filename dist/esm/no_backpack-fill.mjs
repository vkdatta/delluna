export const name="no_backpack-fill";
export const id="dl_b589c49e5851a5c2debb";
export const url=new URL("../icons/no_backpack-fill.svg?v=610f117b94c10c4afd4a5c26c1118a8c5d80d0d073855ad6ca3c0982cba773f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
