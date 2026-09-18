export const name="order_play";
export const id="dl_80efb258b892424cbea5";
export const url=new URL("../icons/O/order_play.svg?v=d822bd4bb454cae593b848224e4f280920146f55a842fe09aa81a7fca099eda4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
