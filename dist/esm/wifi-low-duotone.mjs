export const name="wifi-low-duotone";
export const id="dl_d9fc5316058c4e5fbe2b";
export const url=new URL("../icons/W/wifi-low-duotone.svg?v=929d2eb769677c0facc65ae36eadcfd97ab2a91d5b785a79a85a066cd8d2c66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
