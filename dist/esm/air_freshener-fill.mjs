export const name="air_freshener-fill";
export const id="dl_41499d1d38cf8fbe0d8d";
export const url=new URL("../icons/air_freshener-fill.svg?v=b4255e714ca57976e46dd34c2dca4c91b993b226aaaf4fc29c33b8e0daae87d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
