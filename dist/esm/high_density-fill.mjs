export const name="high_density-fill";
export const id="dl_c1b7d882d8274bcbb535";
export const url=new URL("../icons/high_density-fill.svg?v=8d460f75bbbf6017f3f8c43158092706303530fd5723a185cea1246e8b47c65d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
