export const name="hub-fill";
export const id="dl_d434e7f67f51dcf8c2b3";
export const url=new URL("../icons/hub-fill.svg?v=175c501ae03f37cd6b797215719bec142ab9c8137102bfd49a64029b0a9b211a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
