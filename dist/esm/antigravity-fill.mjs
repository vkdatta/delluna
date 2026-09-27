export const name="antigravity-fill";
export const id="dl_ad8a49956e9adf1e84e8";
export const url=new URL("../icons/antigravity-fill.svg?v=da43eb588529c90613b257d9b1ff25c2d45b2a63f2c74253cbcaf664946f41f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
