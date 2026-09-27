export const name="car-bold";
export const id="dl_9a8c09b8ad114968ac69";
export const url=new URL("../icons/car-bold.svg?v=ef052dff068fc2e6892faffd47da43c9162899ca0b10d06318a7bdf258114432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
