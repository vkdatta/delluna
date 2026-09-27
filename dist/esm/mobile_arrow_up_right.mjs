export const name="mobile_arrow_up_right";
export const id="dl_1327d165696851b97406";
export const url=new URL("../icons/mobile_arrow_up_right.svg?v=b01643be829443929c9155af184dd87741618400721d2969fa9997da128e37aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
