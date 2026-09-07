export const name="game-controller-light";
export const id="dl_02bbdc1a256344688dab";
export const url=new URL("../icons/game-controller-light.svg?v=34e63ddd9e6e26137efb4f1da534858c017acdc1d1324115a03d7a9133a085db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
