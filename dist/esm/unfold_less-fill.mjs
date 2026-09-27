export const name="unfold_less-fill";
export const id="dl_75c642925bc9af35e584";
export const url=new URL("../icons/unfold_less-fill.svg?v=c2c29c9f01956ac95778da9da0a80d4dc943489642904309c3c1e9cd72e895d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
