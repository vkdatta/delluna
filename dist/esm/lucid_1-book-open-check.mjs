export const name="lucid_1-book-open-check";
export const id="dl_375228d19b804fab990b";
export const url=new URL("../icons/lucid_1-book-open-check.svg?v=024829a5bd7ba3b84ee0b6c0946a555f3e32f4a36980078062fb84f6cf078fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
