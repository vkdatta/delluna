export const name="smiley-sad-duotone";
export const id="dl_5c5f083c5b0012b7cd40";
export const url=new URL("../icons/smiley-sad-duotone.svg?v=36dbf08546e64bf7224780b3f49d76ed52d32612c3e7e73981bb47aa19b4c9bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
