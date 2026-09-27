export const name="diamond-duotone";
export const id="dl_b8153a56c9944f268f55";
export const url=new URL("../icons/diamond-duotone.svg?v=d416a4f253e2f4a05c559a929e62cdde9cc7ca10e5bf18ccdd5783e60fdcfb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
