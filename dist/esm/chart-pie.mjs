export const name="chart-pie";
export const id="dl_83b75e2187244f20a5c2";
export const url=new URL("../icons/chart-pie.svg?v=3ec2472d4542f8a07825f4497101beb5564a37c147ad1d3e40cf2ea27f48c585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
