export const name="tag-x";
export const id="dl_242473bce6e6482aa14f";
export const url=new URL("../icons/tag-x.svg?v=ff5f84da51ba4c1eb7a56efb4410eead504555020c53fffd5880d53c7f7c4ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
