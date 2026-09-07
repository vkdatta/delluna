export const name="tag-x";
export const id="dl_242473bce6e6482aa14f";
export const url=new URL("../icons/tag-x.svg?v=029f8d84daee941cee017659c3147007b5706fe3c51e17e742101404f5135b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
