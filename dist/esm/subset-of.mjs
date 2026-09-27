export const name="subset-of";
export const id="dl_d4876fc5b01413bbd6bb";
export const url=new URL("../icons/subset-of.svg?v=f24f4b47c188408852c5a076be75b2571e98799a47fb87efbca565f2e4075c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
