export const name="add_location-fill";
export const id="dl_cf17bf7aa6ccdf16374c";
export const url=new URL("../icons/add_location-fill.svg?v=b66687ed380ce2beb8a85d032d83d944dd06cc87898ff138a4dfd4e8b99bd833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
