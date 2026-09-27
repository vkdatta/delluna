export const name="lucid_1-book-down";
export const id="dl_3d11390ebfcb49af8079";
export const url=new URL("../icons/lucid_1-book-down.svg?v=63a46115e36d182bf04df81f1285ad70768ef5ebe4b1f1aea26fd06c63370a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
