export const name="breastfeeding-fill";
export const id="dl_3c4add03492b49ebb4ad";
export const url=new URL("../icons/B/breastfeeding-fill.svg?v=4e1f3be1bc79224708c92585faf01c55620a3a29ce1dec9313e983c019896047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
