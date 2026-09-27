export const name="diamond-duotone";
export const id="dl_b8153a56c9944f268f55";
export const url=new URL("../icons/diamond-duotone.svg?v=053b81f0283e10e6a8a80cc91483ee01c48f4f0d069a699da6e830b28d0cf2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
