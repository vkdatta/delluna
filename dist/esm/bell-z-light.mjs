export const name="bell-z-light";
export const id="dl_673f70a01a0544198417";
export const url=new URL("../icons/bell-z-light.svg?v=d29ac52c5e691772010d7854f5ac0e304aba98643f4820883ecf0e4e1ab6f1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
