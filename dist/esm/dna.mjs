export const name="dna";
export const id="dl_91551f1bb0024bbbb51a";
export const url=new URL("../icons/dna.svg?v=ceca08a503c6f2a4b293137d39081c8aaa18d8c4b22d394d517d986892d0d024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
