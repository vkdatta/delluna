export const name="sentiment_very_dissatisfied-fill";
export const id="dl_4d4e5e1a9a91440a12b7";
export const url=new URL("../icons/sentiment_very_dissatisfied-fill.svg?v=59e50071ca7f27399153d2bb9d76aaf4e90941b008ecd23d4c1287e10df43329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
