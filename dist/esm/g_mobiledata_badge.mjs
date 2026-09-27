export const name="g_mobiledata_badge";
export const id="dl_b5901d0c0880cb0d8670";
export const url=new URL("../icons/g_mobiledata_badge.svg?v=a440d8be8bdeb2c3cb886ff704dff3d81c847cd1a2be2128aadbca9cd96e730f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
