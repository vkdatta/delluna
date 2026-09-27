export const name="draft_orders";
export const id="dl_11a8b23df848a1e8eb6f";
export const url=new URL("../icons/draft_orders.svg?v=6a0032b52a742ecad14dc0e7a7a450baf751a6a0804d8dbc3b230cbaaa969271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
