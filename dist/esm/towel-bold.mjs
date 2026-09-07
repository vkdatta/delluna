export const name="towel-bold";
export const id="dl_371f2d0f0c1a4a798810";
export const url=new URL("../icons/T/towel-bold.svg?v=dfcffb698a116db2712704259e9f54381275749ccc237f9af47e4ceb68311b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
