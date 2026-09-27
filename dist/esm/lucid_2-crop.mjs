export const name="lucid_2-crop";
export const id="dl_2a265be51fa14db5aa32";
export const url=new URL("../icons/lucid_2-crop.svg?v=bc5281bbdd850d1596fbc865650e8e9c4be5fde02f17bf0395606c0f9e7fcf12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
