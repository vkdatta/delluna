export const name="tablet-smartphone";
export const id="dl_deab320d1d8f4a4fb8c4";
export const url=new URL("../icons/tablet-smartphone.svg?v=a103fc11fb3d878f87893b70ed3d3dd1f0e2d35959ddad9fefca6799eb0b03a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
