export const name="lucid_3-sparkle";
export const id="dl_bfea95450f1d4ceeb158";
export const url=new URL("../icons/lucid_3-sparkle.svg?v=fab720e5f563da51d49f6f6f0e5b084f3e1cfdf6936a25caccf9e821ce580be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
