export const name="water_loss-fill";
export const id="dl_5056e7977e3bf0e7f97b";
export const url=new URL("../icons/water_loss-fill.svg?v=e52649adfcb89875b49d5d51d3a5debde3e122599302ebb062cbfa787926a1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
