export const name="request_page";
export const id="dl_ebf4cd2790b4ec38a16b";
export const url=new URL("../icons/request_page.svg?v=62e61bc917a4a459bd8167aab380d1254bc8f602b8727969e063af8169a3b75d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
