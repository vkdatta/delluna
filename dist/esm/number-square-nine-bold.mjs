export const name="number-square-nine-bold";
export const id="dl_b8cf4348bc954e4ba637";
export const url=new URL("../icons/number-square-nine-bold.svg?v=330de7d3c95dacce26d138865e5e8394a1323de18e3b16cf8a97b0050e1bf21a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
