export const name="lucid_1-book-open-check";
export const id="dl_375228d19b804fab990b";
export const url=new URL("../icons/lucid_1-book-open-check.svg?v=3c35b0e4161d763b5d152bb547eb956e2efc7d6b461f95ae989d4d9fa233e5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
