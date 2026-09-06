export const name="headphones-bold";
export const id="dl_86526ac843034e91b6ae";
export const url=new URL("../icons/headphones-bold.svg?v=163a8eef42bf409f7a4670cc22e3c503d34e18a67dd779a6d25257ec840246d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
