export const name="pants-fill";
export const id="dl_0064a58efeec4ee6b6aa";
export const url=new URL("../icons/pants-fill.svg?v=7d7c51f77e1613f805ee06d44bb54c9b57cee1a924a302fe604f376961381932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
