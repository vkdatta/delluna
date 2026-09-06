export const name="lucid_3-memory-stick";
export const id="dl_3a54b67eadfc4298928f";
export const url=new URL("../icons/lucid_3-memory-stick.svg?v=2569097df0ce2eae86971f177e00be4264a218cbdd48d6c6e22352b14237d15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
