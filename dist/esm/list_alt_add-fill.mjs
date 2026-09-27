export const name="list_alt_add-fill";
export const id="dl_ed4beb623910cc4c15c5";
export const url=new URL("../icons/list_alt_add-fill.svg?v=17c66facfdd3c4ae1cbc5a862bac6d6b006ccb6993caf55c25019ec8a9006d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
