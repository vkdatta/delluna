export const name="prohibit-inset-fill";
export const id="dl_777ddee3ae34479cafeb";
export const url=new URL("../icons/prohibit-inset-fill.svg?v=d417ec76895abcb80208532bbb241bcd517718d13e6a1d750994de9f78dec3b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
