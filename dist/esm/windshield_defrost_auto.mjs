export const name="windshield_defrost_auto";
export const id="dl_aa5695a441a146d68f39";
export const url=new URL("../icons/W/windshield_defrost_auto.svg?v=da47f8c8c7dcb8497c690d12bbf199ecce8a002e004ce54cef54d68676d3ceb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
