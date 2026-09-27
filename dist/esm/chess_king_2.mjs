export const name="chess_king_2";
export const id="dl_dea1ddf09625dd0e5e42";
export const url=new URL("../icons/chess_king_2.svg?v=06787c5fc19c625b2f9de882cce41b60dbf589299b56269324fe4bd74b6cb878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
