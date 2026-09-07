export const name="smiley-sad-duotone";
export const id="dl_0d99cbf1c4594bcdbb3a";
export const url=new URL("../icons/S/smiley-sad-duotone.svg?v=36dbf08546e64bf7224780b3f49d76ed52d32612c3e7e73981bb47aa19b4c9bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
