export const name="lucid_2-mail-x";
export const id="dl_cf1e9b2104c242bd99ec";
export const url=new URL("../icons/lucid_2-mail-x.svg?v=c376a47ae29763f80fda5a9fbcf23da5cef604129fd60ace5186d10a299c06fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
