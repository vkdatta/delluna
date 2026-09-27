export const name="1k-fill";
export const id="dl_944ab97d289fbda81bac";
export const url=new URL("../icons/1k-fill.svg?v=9e1649536d8429d07a13a055f5a9654d111da11c279898d707e1fac72b014592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
