export const name="carry_on_bag_checked";
export const id="dl_99aae1b17ad5dd653753";
export const url=new URL("../icons/carry_on_bag_checked.svg?v=602683aa876f6cf7d320430946dac716634b96cb9a832bc8f50495483b5fb383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
