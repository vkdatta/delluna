export const name="bath_public_large-fill";
export const id="dl_d402c4b62b7bbd7cadc4";
export const url=new URL("../icons/bath_public_large-fill.svg?v=3f5808dade6d6ce5f0d90e048a4fcb3fb6d90c95778626f30a1d4c4d676e1a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
