export const name="funnel-simple-x-duotone";
export const id="dl_0f8b9fae31e6411cb3ff";
export const url=new URL("../icons/funnel-simple-x-duotone.svg?v=ad1cb7910d47a5a3a9da244f3e94555484b3348bc4904ac832c8b58d58cb720f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
