export const name="chart-line-down";
export const id="dl_b9dfa3c146e2405f8288";
export const url=new URL("../icons/chart-line-down.svg?v=07a61c5465a561d580abd7358d5d80c1f1c4cfcbd292a092af563743f5cf26cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
