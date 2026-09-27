export const name="placeholder-duotone";
export const id="dl_10dc46564cda40b1aa36";
export const url=new URL("../icons/placeholder-duotone.svg?v=b48369e746b8c8bdc889eed6e0268d8d84c307ef9208e6e2f703cdcb66c67838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
