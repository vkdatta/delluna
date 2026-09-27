export const name="lucid_2-lens-concave";
export const id="dl_63295e824dd24597bafb";
export const url=new URL("../icons/lucid_2-lens-concave.svg?v=3bc85f7c8f2add7617afc88f0efdf18e1246ec1f35c7bea6904ee65030cf72a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
