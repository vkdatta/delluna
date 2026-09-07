export const name="shuffle-simple-light";
export const id="dl_8c5834362fdc4310acd1";
export const url=new URL("../icons/S/shuffle-simple-light.svg?v=2fb7667e93737ec9de3b01c06af8b918e2a2273cf6e9f86f4a8db4f577feafba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
