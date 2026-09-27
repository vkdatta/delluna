export const name="encrypted-fill";
export const id="dl_762c6fde8cdf3085fd70";
export const url=new URL("../icons/encrypted-fill.svg?v=046062991bcb3d62ba827a424d0b41eeca5b61d0c4a565e791bac4ca8c29807c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
