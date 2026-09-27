export const name="imagesearch_roller-fill";
export const id="dl_eb8f7c41e214df9cda95";
export const url=new URL("../icons/imagesearch_roller-fill.svg?v=e68b710cf13a2085b544df365fa239d20de8a62a4b2abe1f1a00b841243fdd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
