export const name="book-bookmark-bold";
export const id="dl_06fa6dafb9514fab8c7c";
export const url=new URL("../icons/book-bookmark-bold.svg?v=6d59f006bf1517247003a834920aab7b8e6a7805ec2831c5601baade0524c729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
