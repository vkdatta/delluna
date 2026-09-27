export const name="speaker-simple-low-duotone";
export const id="dl_0f880270ef338f4b13f4";
export const url=new URL("../icons/speaker-simple-low-duotone.svg?v=f7f7db4b0979bff947bec53f94746124bfb4fe6afa68abe51a95f65d6c30c29b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
