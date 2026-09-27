export const name="number-zero-thin";
export const id="dl_df6bda249bdc4635891a";
export const url=new URL("../icons/number-zero-thin.svg?v=cf9c2bcd23af3943dd18829407f5db763b99e7a78b1552120e5e8198fb442ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
