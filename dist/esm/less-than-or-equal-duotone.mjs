export const name="less-than-or-equal-duotone";
export const id="dl_934d72f8e355471d8a05";
export const url=new URL("../icons/less-than-or-equal-duotone.svg?v=0a343dbb100ab5cdd64168c805f1c765837f12928eb18345b782cb890ed12867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
