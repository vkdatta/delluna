export const name="shopping-bag-open-thin";
export const id="dl_ee18077b55d5edf00e78";
export const url=new URL("../icons/shopping-bag-open-thin.svg?v=c3512571f5f2d0ba06dd6897fd30c2608bed8499b862e2a38e420ac6fcbe6a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
