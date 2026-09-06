export const name="chart-bar-horizontal-bold";
export const id="dl_06cf1ecd80fb43b19cb0";
export const url=new URL("../icons/chart-bar-horizontal-bold.svg?v=90721e139b91e26c31bf023cddc28fd83ddb45d98bcd296fb1f8f1595deab8a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
