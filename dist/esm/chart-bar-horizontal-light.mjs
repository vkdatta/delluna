export const name="chart-bar-horizontal-light";
export const id="dl_dc1b17a5d8914c839e6f";
export const url=new URL("../icons/chart-bar-horizontal-light.svg?v=016efd9476f9de5734171f1e7cc645437753a9293c5487ea7d46a643f4fa75fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
