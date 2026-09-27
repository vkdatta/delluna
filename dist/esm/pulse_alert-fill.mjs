export const name="pulse_alert-fill";
export const id="dl_8a79382a0bdb645eedc0";
export const url=new URL("../icons/pulse_alert-fill.svg?v=5852036d631974c9332b1d6ce833e8b909fff5ef6e0c53a0165362856f05e0d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
