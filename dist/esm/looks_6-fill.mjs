export const name="looks_6-fill";
export const id="dl_661e42d1f5a54730ad1c";
export const url=new URL("../icons/looks_6-fill.svg?v=de23f0696e28dff04ee8ceac4b7533263b703bbb248605569baeca2f65489d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
