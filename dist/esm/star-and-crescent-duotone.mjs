export const name="star-and-crescent-duotone";
export const id="dl_db51bd5f2a077731dbdb";
export const url=new URL("../icons/star-and-crescent-duotone.svg?v=77cfa069c9afa703009d172d8f52960cf665dd381962442d901bd42c1246b80b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
