export const name="lucid_2-euro";
export const id="dl_7774b7fa4e6345c2b134";
export const url=new URL("../icons/lucid_2-euro.svg?v=070637f1adeb2bc8ee369b927d02f146c7c882be6809fd10d6001be322bdf392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
