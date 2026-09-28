export const name="security_key-fill";
export const id="dl_24bd3b7b1fa5736d33db";
export const url=new URL("../icons/security_key-fill.svg?v=d5321396481eae36913cce939f0520cac4dac45a6f6add708e952a525c1dee8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
