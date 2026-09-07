export const name="coin-vertical-bold";
export const id="dl_45b600fff3264eb9b02e";
export const url=new URL("../icons/coin-vertical-bold.svg?v=0339d4e4fe2ce67d4698075677aade6c9ca914dcca26c66faa9edc332993cea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
