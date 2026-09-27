export const name="lucid_3-replace";
export const id="dl_47a486966a144f899f10";
export const url=new URL("../icons/lucid_3-replace.svg?v=c827e27ffb335e77251f835abe800da8c610c533c5de017d9ac192220797413d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
