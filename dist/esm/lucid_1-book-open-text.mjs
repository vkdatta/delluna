export const name="lucid_1-book-open-text";
export const id="dl_9c830b3bf959432f9576";
export const url=new URL("../icons/lucid_1-book-open-text.svg?v=0c843f12b0c6dc9aa26e52748d7478438513b27b88e3d027c4aea5ad7253d889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
