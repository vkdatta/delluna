export const name="arrows-merge";
export const id="dl_7443ac29581d49ed940b";
export const url=new URL("../icons/arrows-merge.svg?v=539b016c43d95d693548f3a50d41b31e5602209df9881d688092ee85cc6624ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
