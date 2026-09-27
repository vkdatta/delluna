export const name="lucid_1-badge-japanese-yen";
export const id="dl_91276232931448d893c2";
export const url=new URL("../icons/lucid_1-badge-japanese-yen.svg?v=5fd526f5e6da93abcec31dc504fb56a14d466aaec22ec87ea4a4a44253f0c7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
