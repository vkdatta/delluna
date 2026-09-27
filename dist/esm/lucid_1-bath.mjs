export const name="lucid_1-bath";
export const id="dl_02f474327e0c46dc8672";
export const url=new URL("../icons/lucid_1-bath.svg?v=9ddf7fffcb9c05b55cc42593900bffdf6434764bedf5bd88e46b78a5ff85e8b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
