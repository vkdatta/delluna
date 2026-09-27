export const name="chart-line-down-thin";
export const id="dl_cdd7e3d17bf141368d64";
export const url=new URL("../icons/chart-line-down-thin.svg?v=3ff4002b0352c8dd80967d7e89d0bc486b885ccfa5de3c5ff6863b9e1c50f278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
