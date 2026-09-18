export const name="event_list-fill";
export const id="dl_c8d6270d936041f2acbe";
export const url=new URL("../icons/event_list-fill.svg?v=e8cc04d1cb16dab3cf2e3e801bcb5dcbf266b51df9c9ab39dc569d29bdc5651e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
