export const name="mobile_lock_portrait";
export const id="dl_3113ad90449746d7de2f";
export const url=new URL("../icons/mobile_lock_portrait.svg?v=235fe829781e4408dc44fd9a9c8cd1f9a95887e924a1d8b88d7801b7b6bd6af9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
