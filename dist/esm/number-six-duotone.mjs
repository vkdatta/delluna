export const name="number-six-duotone";
export const id="dl_3e01aee0e6e04775bf82";
export const url=new URL("../icons/number-six-duotone.svg?v=fa30a1690a3719b059c4348748c3fca7e7211665a0f0699f3b1bdbd255eeb809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
