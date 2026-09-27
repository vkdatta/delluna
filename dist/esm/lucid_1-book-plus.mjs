export const name="lucid_1-book-plus";
export const id="dl_64d2e0aa23324a6bb349";
export const url=new URL("../icons/lucid_1-book-plus.svg?v=fb5378903d09fb5fdadaf757bf597bf0800e6c6ec2664b8de4c5b9f09228fbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
