export const name="sd_card_alert";
export const id="dl_f82adc58db8c32eb8c9f";
export const url=new URL("../icons/sd_card_alert.svg?v=e03232950cc6b77ce8b57bcd9fa5bc4de2b5112d3dcd282d53667c15673378b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
