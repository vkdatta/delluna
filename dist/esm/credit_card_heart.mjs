export const name="credit_card_heart";
export const id="dl_3ea61ae356233107c9de";
export const url=new URL("../icons/credit_card_heart.svg?v=64d96aa4829db809a2e824cc464e44e54b82ad14932b2bd62433309a167cb8d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
