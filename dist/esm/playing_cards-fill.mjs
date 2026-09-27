export const name="playing_cards-fill";
export const id="dl_67e51d4373ef3f716916";
export const url=new URL("../icons/playing_cards-fill.svg?v=fb244ad557376ea2e5f78b8b2bce0dc21118c4fcd1546b49736a248088d8c7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
