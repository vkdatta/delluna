export const name="lucid_3-message-circle-more";
export const id="dl_1f9d549f31b14b1abc86";
export const url=new URL("../icons/lucid_3-message-circle-more.svg?v=7cc2d6dcfb57e930fe183a10bab518444c933378119b6eec2ab4e71b7e2008e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
