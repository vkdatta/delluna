export const name="lucid_2-file-search";
export const id="dl_7ed11aa0308845d98612";
export const url=new URL("../icons/lucid_2-file-search.svg?v=a4b636911db27270173aa7c3d273ed0b13c7cc3f1ed61f8fc073add42235102f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
