export const name="book-open-text";
export const id="dl_9cbf8be3812542c68d01";
export const url=new URL("../icons/book-open-text.svg?v=a90e77abbdae33cd255ba8f22442fede747d3ec6277b7ae4882b571f028cd641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
