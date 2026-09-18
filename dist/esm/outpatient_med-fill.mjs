export const name="outpatient_med-fill";
export const id="dl_3c2ceceb8eaf49d28f5d";
export const url=new URL("../icons/outpatient_med-fill.svg?v=67e27481ea91c1dce43f7208596ec61a106cc49717b92992c702af74bc7a6c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
