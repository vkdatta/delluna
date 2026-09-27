export const name="chart-line-up";
export const id="dl_b6ce2a5080b04ebd975f";
export const url=new URL("../icons/chart-line-up.svg?v=02dbf150724f5a88da460bd3f8c45fd493f25c8871c78ee0121f810b3b07a104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
