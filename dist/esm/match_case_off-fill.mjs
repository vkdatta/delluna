export const name="match_case_off-fill";
export const id="dl_bb3a8d72273f2c252b23";
export const url=new URL("../icons/match_case_off-fill.svg?v=e52381e397ed8643cb9ce301b6348e1e0ede61d5ba99d47b6583d4813d238342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
