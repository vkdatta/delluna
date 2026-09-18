export const name="approval_delegation-fill";
export const id="dl_ad90ec0ee3ad47d4a440";
export const url=new URL("../icons/approval_delegation-fill.svg?v=9b60b843403c99efb06d56ef5d05cdb7cf46ba6e61a98432c8cc64f746434d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
