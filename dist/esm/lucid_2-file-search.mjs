export const name="lucid_2-file-search";
export const id="dl_7ed11aa0308845d98612";
export const url=new URL("../icons/lucid_2-file-search.svg?v=294f675ec47da47bb0b192b6f54fca3521b0d5ed19a075ad0faaffee73061ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
