export const name="mobile_rotate_lock";
export const id="dl_8fa0959a56b37074db99";
export const url=new URL("../icons/mobile_rotate_lock.svg?v=396db4d8fd6ba8aac4c32d7a96cd82f836314a00fbee95a9024d3a29e51b43a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
