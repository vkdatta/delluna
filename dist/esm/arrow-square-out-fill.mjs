export const name="arrow-square-out-fill";
export const id="dl_ce9858d3ea0841eca1c1";
export const url=new URL("../icons/arrow-square-out-fill.svg?v=a1dfa886de39a3a6f240fd15ef330f094985071cd0ff388b6db4a192cf757795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
