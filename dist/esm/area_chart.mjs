export const name="area_chart";
export const id="dl_b961ea80f700f461496e";
export const url=new URL("../icons/area_chart.svg?v=8a64226f0422ac4833c0fbe5a42af1bfd8990d04118e875ca7726af1dd332c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
