export const name="multiline_chart";
export const id="dl_7d12c32e1ce9b8d95db2";
export const url=new URL("../icons/multiline_chart.svg?v=951f3fb5a969b7381943a295d118be79023f9d29370a405028be3258f5025b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
