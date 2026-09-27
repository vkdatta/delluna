export const name="lucid_1-chart-scatter";
export const id="dl_3940b44124d34ba4a0a9";
export const url=new URL("../icons/lucid_1-chart-scatter.svg?v=009e86a32df003c5efa0ae1ada1ad9177dd710a9f2888a7ea13d6c022d56bc7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
