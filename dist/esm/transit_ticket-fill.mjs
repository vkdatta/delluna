export const name="transit_ticket-fill";
export const id="dl_acf472719d96a3c920cd";
export const url=new URL("../icons/transit_ticket-fill.svg?v=4436f781968a5deaf0adff874804f27cf50b62f16a9ab0283b1f05d8a98c3b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
