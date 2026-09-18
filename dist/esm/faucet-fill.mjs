export const name="faucet-fill";
export const id="dl_14f664d9ebef46d09949";
export const url=new URL("../icons/faucet-fill.svg?v=751503f4858de874da7c207d207afe190c456c1ba8d032071f11f269bef3acda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
