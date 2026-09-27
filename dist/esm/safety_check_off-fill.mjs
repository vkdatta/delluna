export const name="safety_check_off-fill";
export const id="dl_3d1de563c476f28d8b77";
export const url=new URL("../icons/safety_check_off-fill.svg?v=387562e7887b8332192933fc873f0d73261cb8c99aa7bbf973c051cbd6b58f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
