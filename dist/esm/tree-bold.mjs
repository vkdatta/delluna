export const name="tree-bold";
export const id="dl_b709ce895cb84ee2aab3";
export const url=new URL("../icons/tree-bold.svg?v=56c60085468741e6b0fcc3cb56dd6533155c1969221f175c866a34dd5481feec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
