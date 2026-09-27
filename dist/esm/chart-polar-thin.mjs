export const name="chart-polar-thin";
export const id="dl_60e8cc6dc63445eabcfb";
export const url=new URL("../icons/chart-polar-thin.svg?v=a141a08b70e1c373099256a66c5de922ca351088186166b4dd99b426396df916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
