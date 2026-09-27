export const name="date_range";
export const id="dl_ba6f14a0c1f58d34f7a6";
export const url=new URL("../icons/date_range.svg?v=5969d25af05796f91a9aef4f3013167c12e111b3251fd295c73fbf5ae7c93e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
