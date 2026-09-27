export const name="24mp";
export const id="dl_57354fd23c869871cfd3";
export const url=new URL("../icons/24mp.svg?v=6820cdae08f19a019a30e877fceb667df4e93e27c35f239ada864edfa17c962f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
