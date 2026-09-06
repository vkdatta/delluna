export const name="path";
export const id="dl_4a7453390b5c471986c0";
export const url=new URL("../icons/path.svg?v=76f5e16efb2333fb42f40d5685c2d3b0bb037597fa8253ee1974dfece3514f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
