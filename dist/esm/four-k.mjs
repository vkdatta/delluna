export const name="four-k";
export const id="dl_12de0e908b4f46b49d30";
export const url=new URL("../icons/four-k.svg?v=ac923f7690be844bf7e6cf1bc72e532e166cc7fd979e6b937ca41e07ecb57197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
