export const name="hourglass-high";
export const id="dl_3b548ce8e1924beda6fa";
export const url=new URL("../icons/hourglass-high.svg?v=1d37ee56cdccd3c02d3d381288ede5e9a09135b7b9c78f02b3caa877326bceea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
