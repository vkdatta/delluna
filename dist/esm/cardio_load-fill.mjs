export const name="cardio_load-fill";
export const id="dl_d518c61a27ee9bd9223f";
export const url=new URL("../icons/cardio_load-fill.svg?v=4b8b0d7f74a6a8983ee26e530ebca3c3a8078ed140a19dcd9b2b9601cc3201a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
