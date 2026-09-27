export const name="bakery_dining-fill";
export const id="dl_9ba356aab5e340a183ee";
export const url=new URL("../icons/bakery_dining-fill.svg?v=eb81621ef7382bca24220fe3acc289b153a4baf147c0ec292f6c074897c1b25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
