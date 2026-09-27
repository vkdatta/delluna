export const name="5g";
export const id="dl_b4e6ce31ca7f499436d7";
export const url=new URL("../icons/5g.svg?v=f14a970fde116a91dd4a802a8cba512df279f982bd040686d87e7a8ca2e7197f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
