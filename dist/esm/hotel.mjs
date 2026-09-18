export const name="hotel";
export const id="dl_52b966729fe6448abd89";
export const url=new URL("../icons/H/hotel.svg?v=4190176d12b614bd1bc46b2cbb466daa364f94f6c17c4bd357db6daf7576ade1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
