export const name="diamond-duotone";
export const id="dl_b8153a56c9944f268f55";
export const url=new URL("../icons/diamond-duotone.svg?v=e13bea2cd9ee6af07d3af55aef5fbd6054eac7428a6cbbc914803958c52fd5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
