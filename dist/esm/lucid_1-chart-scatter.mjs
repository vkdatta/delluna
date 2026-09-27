export const name="lucid_1-chart-scatter";
export const id="dl_3940b44124d34ba4a0a9";
export const url=new URL("../icons/lucid_1-chart-scatter.svg?v=d0852e839deb0320a13ae7ef466d5156ed7276e551f82f1178f61192ff672da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
