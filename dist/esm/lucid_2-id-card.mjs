export const name="lucid_2-id-card";
export const id="dl_9ffffb4d4be44ded8b7b";
export const url=new URL("../icons/lucid_2-id-card.svg?v=cc35c6c683b23a371b744b2f8168a06d72115053267152e44c917b465e5911db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
