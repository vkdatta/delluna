export const name="lucid_1-cone";
export const id="dl_ad878ba6bd9a4b04959a";
export const url=new URL("../icons/lucid_1-cone.svg?v=e5874dc0757b9052af05891b5eb883d12a68d6bc340944e7a4213894900cc22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
