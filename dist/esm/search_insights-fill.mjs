export const name="search_insights-fill";
export const id="dl_760311441abcec498dce";
export const url=new URL("../icons/search_insights-fill.svg?v=c28427a137160779febf8d503bf7de07f6c426a81806372ba5e7f01259040183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
