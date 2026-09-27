export const name="lucid_3-phone-forwarded";
export const id="dl_f5a2feca375147799c84";
export const url=new URL("../icons/lucid_3-phone-forwarded.svg?v=dbce77868693aaf5fb342d2bb48a8204364c079dae242c96f6f8eff4a13e80c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
