export const name="lucid_3-spotlight";
export const id="dl_d948959185c74c728d36";
export const url=new URL("../icons/lucid_3-spotlight.svg?v=e551a28ec6d909ee028b0c587586e5f9d5de0e28c505c1b74e6ff542c9c86497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
