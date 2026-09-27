export const name="shear";
export const id="dl_4319da88c03e4b2984ee";
export const url=new URL("../icons/shear.svg?v=fe11a598d041f10b8e8606b96ad2e9a14b22eb0343ad10e11044a032b7790455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
