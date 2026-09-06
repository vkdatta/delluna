export const name="hourglass-high-bold";
export const id="dl_177da75287694c68b57b";
export const url=new URL("../icons/hourglass-high-bold.svg?v=671a6587a9f357d5b286db5bdb01549705188a6894f64e84a1fa35631e225912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
