export const name="shield_card";
export const id="dl_3b08e09844b84d0bab3f";
export const url=new URL("../icons/S/shield_card.svg?v=4d8bb17de89123ef385d92f12aac3413b8c3b0ee7c977b201d12812acea9e48e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
