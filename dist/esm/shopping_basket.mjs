export const name="shopping_basket";
export const id="dl_655f0c09ccb87ed4d578";
export const url=new URL("../icons/shopping_basket.svg?v=411e8ea4dbfad808fa3c3589ef403e278b6718382c3aed5140eaa71c784f6e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
