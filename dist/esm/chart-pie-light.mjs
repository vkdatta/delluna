export const name="chart-pie-light";
export const id="dl_2fce1250c0bf4b2b9434";
export const url=new URL("../icons/chart-pie-light.svg?v=8cc85e91589d0f58cfa535fef766e400715404436c21d0e35d9507d89199edaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
