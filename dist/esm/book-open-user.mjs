export const name="book-open-user";
export const id="dl_f0ba3089b3864f9589ba";
export const url=new URL("../icons/book-open-user.svg?v=84268fbccf7d353deca12fb753201c3614db9e5b64c24c1ad0c5df6b9d65d6fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
