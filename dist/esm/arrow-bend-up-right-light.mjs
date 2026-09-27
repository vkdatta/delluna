export const name="arrow-bend-up-right-light";
export const id="dl_c1a935cda6a1485e9715";
export const url=new URL("../icons/arrow-bend-up-right-light.svg?v=7cbe634afbc201eb0ac5cbbb688bf58e3251aa972bddc0281743659295087553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
