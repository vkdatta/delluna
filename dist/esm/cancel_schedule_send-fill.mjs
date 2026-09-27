export const name="cancel_schedule_send-fill";
export const id="dl_4e19af7f9df824343223";
export const url=new URL("../icons/cancel_schedule_send-fill.svg?v=7dcce97e3c36f3a87371fba3d3dec23001f88ce9698ecbb9ca94a19873e44e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
