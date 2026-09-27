export const name="mitre-fill";
export const id="dl_4aa9be2f1e437fedcebe";
export const url=new URL("../icons/mitre-fill.svg?v=f4176f82edab2439775f2b34e08a7fb926e565f911d0de3babc4caf946a644a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
