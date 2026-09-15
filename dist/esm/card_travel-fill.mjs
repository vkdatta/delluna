export const name="card_travel-fill";
export const id="dl_61373c1db4c4440384c8";
export const url=new URL("../icons/C/card_travel-fill.svg?v=5c72229f5479ececf189fd907e55136eadc622f998f73a95b78330572110612d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
