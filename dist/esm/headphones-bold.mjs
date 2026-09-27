export const name="headphones-bold";
export const id="dl_86526ac843034e91b6ae";
export const url=new URL("../icons/headphones-bold.svg?v=676b39cd21cf4422d2a589d1b8992cc6e08517334ff8cd0b8beb0a6aa7392c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
