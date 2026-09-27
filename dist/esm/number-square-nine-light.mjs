export const name="number-square-nine-light";
export const id="dl_de8ceffdf7b34907a9e6";
export const url=new URL("../icons/number-square-nine-light.svg?v=9980ed4669492c8063aa14477035a984c769276271a9c9d3b4a0cc5c44af8e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
