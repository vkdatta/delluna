export const name="gas-can-duotone";
export const id="dl_1e4635c46ab140eda849";
export const url=new URL("../icons/gas-can-duotone.svg?v=7f5b11d079f8766f77670509275fd6f5db4c12378ee7c71cf0647c4172b0a29d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
