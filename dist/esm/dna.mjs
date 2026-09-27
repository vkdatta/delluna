export const name="dna";
export const id="dl_91551f1bb0024bbbb51a";
export const url=new URL("../icons/dna.svg?v=bfca2734c147c8daba393d9bce0cedcf0dc8ae81f2b8a2d65214cb5cca96b1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
