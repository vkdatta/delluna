export const name="train";
export const id="dl_79038d068f54907ae337";
export const url=new URL("../icons/train.svg?v=181d5f3b9e74c058b721c91b027d8ad505912735096b78fe38e86edade624a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
