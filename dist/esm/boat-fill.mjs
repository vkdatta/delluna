export const name="boat-fill";
export const id="dl_788e8f36c9b94069b3ee";
export const url=new URL("../icons/boat-fill.svg?v=27301fe498ce3dad77a0b8401935eb1b1c268177aa227272ddb599d40be51841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
