export const name="lucid_1-cloud-rain-wind";
export const id="dl_7b36e10e047644b195f8";
export const url=new URL("../icons/lucid_1-cloud-rain-wind.svg?v=a512d15893ff07fa2091579ef7169ed5ab4e45ceb4b72078095f21ef36ffbabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
