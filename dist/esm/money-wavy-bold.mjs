export const name="money-wavy-bold";
export const id="dl_893a0ff9de3945cf83cc";
export const url=new URL("../icons/money-wavy-bold.svg?v=4c1792c8f27a92d425abe36817c9d6b6b5cfa4a5041f1d086d39165091928d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
