export const name="lightbulb-fill";
export const id="dl_482bae43798e499fad04";
export const url=new URL("../icons/lightbulb-fill.svg?v=b899a97720b0aa8db4fe1f7be31cccba2664eafe879231c47d907d9759309c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
