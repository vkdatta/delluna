export const name="lucid_3-scaling";
export const id="dl_063eaeeb6ebf400ca362";
export const url=new URL("../icons/lucid_3-scaling.svg?v=bd37c05e452e99ad233b0f2c70da2eff0ebb344e2012509a23ac7e5a48fb8b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
