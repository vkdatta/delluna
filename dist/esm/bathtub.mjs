export const name="bathtub";
export const id="dl_e8c8f13bb6434658b9b9";
export const url=new URL("../icons/bathtub.svg?v=ad55105bafe524a0a30d076b054258610ae81d0460fe68670ec576762bce8699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
