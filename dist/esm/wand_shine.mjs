export const name="wand_shine";
export const id="dl_a38d3cbc4dd6bffe8763";
export const url=new URL("../icons/wand_shine.svg?v=d066dcaa90243345698f34400eeceb21613f7ebfa6040e2384d04bff1879b14f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
