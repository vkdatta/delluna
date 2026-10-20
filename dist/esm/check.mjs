export const name="check";
export const id="dl_19037d8510ca4be0a45a";
export const url=new URL("../icons/icons-svg/check.svg?v=2000d83a0ae6f24abce4340321b4f3e2c01da96656d506b82d12bc44b9e7e926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
