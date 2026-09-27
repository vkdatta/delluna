export const name="airplane-duotone";
export const id="dl_f0e2de3582e94136a776";
export const url=new URL("../icons/airplane-duotone.svg?v=3c9331a41b0a7133dd859ebebdca0f3475c1cbf320405b5166df2fce09f7efa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
