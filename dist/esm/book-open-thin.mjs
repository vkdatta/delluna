export const name="book-open-thin";
export const id="dl_84c88ecc380b42be9231";
export const url=new URL("../icons/book-open-thin.svg?v=a5f84f3971c16de0e96de5cddb14a1fffc71956767f046a4cd5fd5403508e37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
