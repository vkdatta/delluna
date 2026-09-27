export const name="token-fill";
export const id="dl_d5c84dd70720fdca669a";
export const url=new URL("../icons/token-fill.svg?v=b9b4221c712a3347463669da9125250b91c11af001dd6a5b33ca7dc027b4058d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
