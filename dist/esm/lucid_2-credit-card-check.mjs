export const name="lucid_2-credit-card-check";
export const id="dl_6062cadcc9f04d34bf45";
export const url=new URL("../icons/lucid_2-credit-card-check.svg?v=f3eae2ec17e3b2f30357e905b75b881b8106e04546d9c31f6e4113159a9a893b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
