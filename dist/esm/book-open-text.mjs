export const name="book-open-text";
export const id="dl_9cbf8be3812542c68d01";
export const url=new URL("../icons/book-open-text.svg?v=59c4c9c5e7cebdbdc93e8099a8cee1367617e8d143affed2b6e03edceca12129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
