export const name="contract";
export const id="dl_5a2170fb6f846105e000";
export const url=new URL("../icons/contract.svg?v=5198bcac3439c80ba4e9c2c6805c15019eff1ea24324b24e535229b8015bc2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
