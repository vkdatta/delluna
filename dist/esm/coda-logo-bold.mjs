export const name="coda-logo-bold";
export const id="dl_4cad800a18134fd4a5f2";
export const url=new URL("../icons/coda-logo-bold.svg?v=991f24cd0e1d315660bc09ea36d072abf1164e20f0f554b66afb5418c489691b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
