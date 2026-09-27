export const name="approximate-equals-bold";
export const id="dl_37f23742a0274826a9c9";
export const url=new URL("../icons/approximate-equals-bold.svg?v=dac7ce14e5ac0ceca6662e13de4374bdc22c296b940a7667e6fa7a66d8da9bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
