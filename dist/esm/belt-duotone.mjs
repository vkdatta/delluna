export const name="belt-duotone";
export const id="dl_8bb68f15e3b94bb4b42d";
export const url=new URL("../icons/belt-duotone.svg?v=fb38aefe5b903f0b1fee1408bd6c5846ac0380204864a01b77cc744786e1995a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
