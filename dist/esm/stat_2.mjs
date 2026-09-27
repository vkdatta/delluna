export const name="stat_2";
export const id="dl_068a14f642583106e0dd";
export const url=new URL("../icons/stat_2.svg?v=8cf4b88e4aec5c56e9ec62d5ef94013589f48e67a0ae25824d7c57a38cbc091f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
