export const name="quick_reorder";
export const id="dl_39be14f38ad44dd88c78";
export const url=new URL("../icons/quick_reorder.svg?v=0b61e7363501323343291150314c6b6a5956d0e676ab9444b17d7418872d1c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
