export const name="microbiology";
export const id="dl_aecf08189308a527f98f";
export const url=new URL("../icons/microbiology.svg?v=3d1713215f0d09fd139619230bcfd75744b0ae59147dfa31ea297fd365671981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
