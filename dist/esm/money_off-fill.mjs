export const name="money_off-fill";
export const id="dl_3c323d00f02f1b48ba9a";
export const url=new URL("../icons/money_off-fill.svg?v=afe1e9a019e7a0f97fa1d1e3e89eb920ef87cb05ef08ea5863e6e8190729695c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
