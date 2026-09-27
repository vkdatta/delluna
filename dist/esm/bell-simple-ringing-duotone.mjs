export const name="bell-simple-ringing-duotone";
export const id="dl_7603bf096eea46acb7aa";
export const url=new URL("../icons/bell-simple-ringing-duotone.svg?v=c118eb20d35f63964e8636f8cd60ea07408114cb8ca4026ecfcb14377dc88ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
