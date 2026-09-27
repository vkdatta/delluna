export const name="lucid_2-file-stack";
export const id="dl_d6d604b534cb44bb8362";
export const url=new URL("../icons/lucid_2-file-stack.svg?v=8c0d24a5548a822864e7aee420b21a42dc3c0c590caed8ff416f90941b576f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
