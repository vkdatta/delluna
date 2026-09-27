export const name="lucid_3-map-pin-house";
export const id="dl_f44c75fa5baa4473a90a";
export const url=new URL("../icons/lucid_3-map-pin-house.svg?v=8da0a28cf3cd80f580f7b4564b23826a2f6600f31663f05415fc950fc1e5a01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
