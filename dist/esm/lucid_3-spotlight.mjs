export const name="lucid_3-spotlight";
export const id="dl_d948959185c74c728d36";
export const url=new URL("../icons/lucid_3-spotlight.svg?v=130faf298b46b1c9709a0b94f7012b0112991b51664f964ea235687e63706efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
