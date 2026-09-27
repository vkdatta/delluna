export const name="less-than-or-equal-duotone";
export const id="dl_934d72f8e355471d8a05";
export const url=new URL("../icons/less-than-or-equal-duotone.svg?v=36d13c73ae479ebf030e79414a453345e152f0647110e8f887edb73d2330ced1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
