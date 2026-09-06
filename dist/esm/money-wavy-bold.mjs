export const name="money-wavy-bold";
export const id="dl_893a0ff9de3945cf83cc";
export const url=new URL("../icons/money-wavy-bold.svg?v=c96b9cade7f57b6c2fc9df1d109e5ca3b39a6d33c11d812ee32c12b7d88d6876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
