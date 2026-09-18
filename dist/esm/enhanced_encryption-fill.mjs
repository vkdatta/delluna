export const name="enhanced_encryption-fill";
export const id="dl_385b1f36578d4c7eaeb8";
export const url=new URL("../icons/enhanced_encryption-fill.svg?v=54ecf46c480165d98459109b1a9c916d4a8a349b0a70ab7108b7e8ae407ca8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
