export const name="self_improvement";
export const id="dl_099b68c2ca0309414fb0";
export const url=new URL("../icons/self_improvement.svg?v=03811e4deea364148816ccb00a0de626068207b9d83cad25cd914d60d749308e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
