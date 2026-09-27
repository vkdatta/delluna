export const name="pest_control_rodent";
export const id="dl_3b3afed98482a847d274";
export const url=new URL("../icons/pest_control_rodent.svg?v=4a757b68b11308531d1b3012bc466bdb077a12524be045e9540647a298538c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
