export const name="person_pin_circle-fill";
export const id="dl_3f77fa1664a59ff4061a";
export const url=new URL("../icons/person_pin_circle-fill.svg?v=ce8591cbd5200b6fc49296c73b7ceb17dda3dc22f071fb437b3cc73c59024aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
