export const name="square_minus";
export const id="dl_0a90b63591a81399a427";
export const url=new URL("../icons/square_minus.svg?v=00b0cf62cbcda9a2bd2387f2c8eaecb6c01da169a9aead3f80fcb315d8af63a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
