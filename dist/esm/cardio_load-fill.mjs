export const name="cardio_load-fill";
export const id="dl_84c364bfa61846e5b981";
export const url=new URL("../icons/C/cardio_load-fill.svg?v=f11125efb380f900d3881efb10ea8e112952a8c8fc8461dc12ce315bada77b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
