export const name="energy_savings_leaf-fill";
export const id="dl_b47ccbbc94d14208a040";
export const url=new URL("../icons/energy_savings_leaf-fill.svg?v=d988e17cb013119fb89cf98f044205aef62d5e1380793db02cefe811029ada40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
