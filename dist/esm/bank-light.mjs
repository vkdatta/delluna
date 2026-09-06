export const name="bank-light";
export const id="dl_982f693de0aa4144981f";
export const url=new URL("../icons/bank-light.svg?v=1db9116cdcda1f1e107be5ce9c6564475f46ef78927869a2ab54835ac298d54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
