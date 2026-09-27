export const name="mode_fan_2-fill";
export const id="dl_0230a37c2bb1472a26fc";
export const url=new URL("../icons/mode_fan_2-fill.svg?v=7c0bd3e57abb6ce4b75def44ca4e10889e0f7173ebce7f7de9914c4fb56d7b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
