export const name="arrow-fat-lines-right-bold";
export const id="dl_fec9b800d60545da962e";
export const url=new URL("../icons/arrow-fat-lines-right-bold.svg?v=ee4887eb016b434084282c18bd4bea3feaf147c2f7327533d87845c836046fe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
