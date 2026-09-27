export const name="lucid_1-bring-to-front";
export const id="dl_233f080f0db44483a17f";
export const url=new URL("../icons/lucid_1-bring-to-front.svg?v=27f2e422ee8e03e208f8dbf7fd63a9cf93ab8703f3c7e4cfbe088c990b393486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
