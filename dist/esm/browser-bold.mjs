export const name="browser-bold";
export const id="dl_cab50d3192164c6a8a34";
export const url=new URL("../icons/browser-bold.svg?v=e5ceedfbd4ba825b5438e68b2846f268fdd92dc427b9f88f57085feb0345968a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
