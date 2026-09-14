export const name="account_child";
export const id="dl_3097d4ed2a8143a1aec1";
export const url=new URL("../icons/A/account_child.svg?v=6059f59a0ea7fd44b70faf3cb4f46b093d2ca5d861f0fdeb031d8894c7de308b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
