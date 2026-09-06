export const name="chart-line-down";
export const id="dl_b9dfa3c146e2405f8288";
export const url=new URL("../icons/chart-line-down.svg?v=1477a36eada021a87719d620c98e144954f1799b0f8c13ab2b7c13db842f4577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
