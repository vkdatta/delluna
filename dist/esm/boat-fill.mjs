export const name="boat-fill";
export const id="dl_788e8f36c9b94069b3ee";
export const url=new URL("../icons/boat-fill.svg?v=6389e7f440c90072b047a0682d5bddd558ae36f0a89d165af175274e2df455d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
