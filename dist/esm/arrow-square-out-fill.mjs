export const name="arrow-square-out-fill";
export const id="dl_ce9858d3ea0841eca1c1";
export const url=new URL("../icons/arrow-square-out-fill.svg?v=1b26879605d3490b52b0dfa2b5ccaa52cad9e33607011c56f023c3bcb15f2984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
