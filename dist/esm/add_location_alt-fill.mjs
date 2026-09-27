export const name="add_location_alt-fill";
export const id="dl_0f3cc4b37c4bde976901";
export const url=new URL("../icons/add_location_alt-fill.svg?v=3b75adaf6e64fc25a14f783ee39b7c69cc2582d72defd0efe60a88c9f68eb4c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
