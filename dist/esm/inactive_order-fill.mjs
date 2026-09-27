export const name="inactive_order-fill";
export const id="dl_3ee8d9bc7a2deafc8a20";
export const url=new URL("../icons/inactive_order-fill.svg?v=288cad0557f689f9d6c8f3b96ac72572d4d1fa5eed1be2594876a0977be7f861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
