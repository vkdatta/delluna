export const name="shuffle-simple-light";
export const id="dl_2f10baf5954b5c3f7f34";
export const url=new URL("../icons/shuffle-simple-light.svg?v=2fb7667e93737ec9de3b01c06af8b918e2a2273cf6e9f86f4a8db4f577feafba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
