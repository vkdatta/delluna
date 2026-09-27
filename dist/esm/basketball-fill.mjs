export const name="basketball-fill";
export const id="dl_d24501d81dec48098de2";
export const url=new URL("../icons/basketball-fill.svg?v=fc7871e40953e87b5769071e127a22af9b28cd8c07aec288c3775f09ff88c83d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
