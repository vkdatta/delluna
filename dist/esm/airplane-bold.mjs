export const name="airplane-bold";
export const id="dl_e631f9431bad4e4eb599";
export const url=new URL("../icons/airplane-bold.svg?v=2fd1975a342a7c8bab583d6819d89197312b7bb3f396a7e114d9d719b3226a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
