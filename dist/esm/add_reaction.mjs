export const name="add_reaction";
export const id="dl_fa35e8c36dc40f9973cf";
export const url=new URL("../icons/add_reaction.svg?v=9290757db75e89b98fae270edad83036d89e28e6ed69349cdc82267e6a6e5d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
