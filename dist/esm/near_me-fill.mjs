export const name="near_me-fill";
export const id="dl_27b559a7cdc7a8253021";
export const url=new URL("../icons/near_me-fill.svg?v=9fb551601dc5ec169f66431da88fd5fb846e66ca437299c9ce64ea38c5673e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
