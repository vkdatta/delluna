export const name="math-operations-bold";
export const id="dl_5f4ca9dd2fae4342bda8";
export const url=new URL("../icons/math-operations-bold.svg?v=76ada7302d2c15af6239afe998cdf4bbaf51ffc9973f7619bca6e7c934951565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
