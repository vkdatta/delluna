export const name="game-controller-light";
export const id="dl_02bbdc1a256344688dab";
export const url=new URL("../icons/game-controller-light.svg?v=07aa592c449a3d15f6be1c4861a885e212173eb6893b022afd4f214cbb956bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
