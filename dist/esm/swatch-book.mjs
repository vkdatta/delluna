export const name="swatch-book";
export const id="dl_383d3051f2a54f5dac27";
export const url=new URL("../icons/swatch-book.svg?v=1b9c1bcf6764d959c2007815b3d892be10860495ed1ee702dbcdb320077f03a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
