export const name="dna-thin";
export const id="dl_258a8c75d2a145be8fd9";
export const url=new URL("../icons/dna-thin.svg?v=00c701d7a969ec50c8767a40fb2c9e8a11d0306e96622c8e50b82ca6905cd51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
