export const name="filter_none";
export const id="dl_f72a583b9e622ef29988";
export const url=new URL("../icons/filter_none.svg?v=6d06451e555a3458b6736681b4bbe3c4a88398af2a06c8018d2d6d52c6f9cbcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
