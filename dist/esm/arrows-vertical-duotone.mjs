export const name="arrows-vertical-duotone";
export const id="dl_bb19b40575ad476a865f";
export const url=new URL("../icons/arrows-vertical-duotone.svg?v=50eca4cfef90a3a45d26d342907b25b0efb43ec6f124e67ec8fa44a262634c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
