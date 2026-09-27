export const name="water_full-fill";
export const id="dl_ce40773c317469496006";
export const url=new URL("../icons/water_full-fill.svg?v=2d03f6e393e2a4812d471144d0a14bd45cd1718cf8601ebacaed704d21c6933f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
