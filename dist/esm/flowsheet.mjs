export const name="flowsheet";
export const id="dl_da76e62499b458cb0c79";
export const url=new URL("../icons/flowsheet.svg?v=07173b1932c53bc8f635c0e216a34fe12ed3ee33a24372c2f9947789adda1eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
