export const name="caret-line-up-thin";
export const id="dl_847a4a56b09f4552a6d9";
export const url=new URL("../icons/caret-line-up-thin.svg?v=fb14ace5bbe6a64c9431a430308b1fde1d5f2ea98a4394880f36db58d6b93280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
