export const name="variable_remove";
export const id="dl_4a6830b56d5fcd538900";
export const url=new URL("../icons/variable_remove.svg?v=97cf04d89697b135ffcc459715c2923d2f9e4c05d7d427c1fc5072809bdf7994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
