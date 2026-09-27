export const name="funnel-simple-x-duotone";
export const id="dl_0f8b9fae31e6411cb3ff";
export const url=new URL("../icons/funnel-simple-x-duotone.svg?v=398d46f7dead7ca00596123d2006ca1f4decef3d2dcb5e250eef99e4391bdb31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
