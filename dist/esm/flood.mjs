export const name="flood";
export const id="dl_c7af3b3e4a9646deb204";
export const url=new URL("../icons/flood.svg?v=801885f650fff707653148bf533ed63677048f9325ee68f1efa3ee3577716e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
