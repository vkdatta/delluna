export const name="lucid_1-circle-stop";
export const id="dl_251b314cb9574b8fbb04";
export const url=new URL("../icons/lucid_1-circle-stop.svg?v=9d24fc0c4432e74dcbc2cff2f7216aefd75767c7d395aabcb89a98f5dd228812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
