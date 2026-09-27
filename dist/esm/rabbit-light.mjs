export const name="rabbit-light";
export const id="dl_c8ffb35eecc245ddafbb";
export const url=new URL("../icons/rabbit-light.svg?v=07710bb11a7db635c3c5565ada8aa8b77e0940cea7e680f8280d97a45227aa84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
