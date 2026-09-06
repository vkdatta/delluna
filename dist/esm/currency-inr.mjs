export const name="currency-inr";
export const id="dl_1e84d7eb16424d7a956e";
export const url=new URL("../icons/currency-inr.svg?v=82d9ec2335f065ba4558ba080204dd473935dadd74e45243bf219aaf13d2d918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
