export const name="battery_horiz_050-fill";
export const id="dl_bf5460529c56a90e4bcc";
export const url=new URL("../icons/battery_horiz_050-fill.svg?v=16393e3eefc42075187fc36a9546cd7b21b46ac667e17dc8744bc72887dc6316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
