export const name="sort-ascending-duotone";
export const id="dl_860ebdfd2beaa36fee61";
export const url=new URL("../icons/sort-ascending-duotone.svg?v=43691d297f013089c338818dbd24a6c20e8aadb0b054fc27190f8a1170e5738f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
