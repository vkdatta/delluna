export const name="lucid_2-hash";
export const id="dl_9a5acb23126d40398fec";
export const url=new URL("../icons/lucid_2-hash.svg?v=da0d47a7284d89388f8f8b8000b7b27e003fc0ead65674a084137441a91943ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
