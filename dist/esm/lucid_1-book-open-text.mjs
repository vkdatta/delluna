export const name="lucid_1-book-open-text";
export const id="dl_9c830b3bf959432f9576";
export const url=new URL("../icons/lucid_1-book-open-text.svg?v=6f3d13efc0fc38856f7f753ca406efc1d3b0fa38a57703fe42e4757b913fc6f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
