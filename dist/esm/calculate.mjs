export const name="calculate";
export const id="dl_55b94981654a058950b2";
export const url=new URL("../icons/calculate.svg?v=eb434dfe361ea43c720f47dbdd6659e25125065e9f835e80930f3b35b9dd5c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
