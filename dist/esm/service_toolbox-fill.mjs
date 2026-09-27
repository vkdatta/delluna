export const name="service_toolbox-fill";
export const id="dl_269bc8adfbc85eed9530";
export const url=new URL("../icons/service_toolbox-fill.svg?v=ab3458e4cf17f20f5a4d31a2c26e283561100e0e96ee7921513823675af3397f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
