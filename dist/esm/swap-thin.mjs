export const name="swap-thin";
export const id="dl_10512207843a455ef42a";
export const url=new URL("../icons/swap-thin.svg?v=79be3ab646d6eac0064e0e082d9749c50ed1ef3f5dacb7802972a461ffe2db3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
