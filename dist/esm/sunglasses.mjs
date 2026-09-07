export const name="sunglasses";
export const id="dl_4c0bb71c6eb74139aed4";
export const url=new URL("../icons/S/sunglasses.svg?v=d1bc3d71bfe104b134620d62d6085b56ab2935c6d44858fba362500d46310c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
