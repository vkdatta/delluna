export const name="chart-pie-slice-fill";
export const id="dl_98b0937a89524255a03c";
export const url=new URL("../icons/chart-pie-slice-fill.svg?v=d12c1a05279b0c30d42bc35f86762099b4da8f60a9792086a4c9fbae378fcf70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
