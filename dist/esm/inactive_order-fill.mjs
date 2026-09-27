export const name="inactive_order-fill";
export const id="dl_5c0abeae0d7032687969";
export const url=new URL("../icons/inactive_order-fill.svg?v=4a998edd6c0f8770353047fa9f6a0baf13ce19a2f1d60418f2f02af810ff14aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
