export const name="dice-six-thin";
export const id="dl_bc97ef9adaf84ed584a0";
export const url=new URL("../icons/dice-six-thin.svg?v=560df93d98be7f4be14d0bcfaed4f53ef236ac0351ad88987d945294a3a7d6b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
