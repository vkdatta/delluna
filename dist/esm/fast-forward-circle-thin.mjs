export const name="fast-forward-circle-thin";
export const id="dl_3797bf786a744a8b914b";
export const url=new URL("../icons/fast-forward-circle-thin.svg?v=30298acc1bf3c12ebefce551f3a9e7c8e130041c3d4fb00a5923c33a3b49d1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
