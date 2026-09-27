export const name="book_5";
export const id="dl_2bbd00254a21715bbb11";
export const url=new URL("../icons/book_5.svg?v=7f87a017140f6250e3978fbe51d70ce50c15640b34b7056b3dd6f29f891a01a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
