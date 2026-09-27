export const name="savings";
export const id="dl_0da9e65b8bf31a9b7c17";
export const url=new URL("../icons/savings.svg?v=9dd29c7a1df6737e36b1d5bbef990145f822a496e7c39e8240ce1d87afb05a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
