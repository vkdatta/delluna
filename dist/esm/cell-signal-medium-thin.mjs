export const name="cell-signal-medium-thin";
export const id="dl_99f83bc9137042f1aa65";
export const url=new URL("../icons/cell-signal-medium-thin.svg?v=f9076edc1bfe4766118d14914c5209c21adec2cb1f64167329cd39d852889284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
