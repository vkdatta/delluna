export const name="credit-card-fill";
export const id="dl_fc0e340ac73a4eb4b4de";
export const url=new URL("../icons/credit-card-fill.svg?v=2d6f46606f7d51a8e756f4cf5fb2f647d217dd998f5cbf95ef107e72f9f533f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
