export const name="household_supplies";
export const id="dl_53e4e54a83c89b95a0b0";
export const url=new URL("../icons/household_supplies.svg?v=3048ee2b9687dce06d5c977733fce5562879d69b5fbec9aad40c69a07d0a5ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
