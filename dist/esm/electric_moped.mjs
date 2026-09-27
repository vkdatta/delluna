export const name="electric_moped";
export const id="dl_82dd5915fca76ba05254";
export const url=new URL("../icons/electric_moped.svg?v=f16b048a93066d18a01af9c56474fc3a17620b5d9534c45f2eab1cfeeab12641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
