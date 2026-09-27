export const name="chart-bar-horizontal-bold";
export const id="dl_06cf1ecd80fb43b19cb0";
export const url=new URL("../icons/chart-bar-horizontal-bold.svg?v=da5fa1d5fd2e9783b0f65e2c211e268267fd96d450adae71ff357e49c2e0fa08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
