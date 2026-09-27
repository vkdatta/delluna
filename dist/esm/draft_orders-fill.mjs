export const name="draft_orders-fill";
export const id="dl_5fc5b06ac358128604c5";
export const url=new URL("../icons/draft_orders-fill.svg?v=fe761125d3674c2ee33eb678774b9472e625ee48c41222bed6b3dc5fbf06878f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
