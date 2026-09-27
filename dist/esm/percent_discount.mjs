export const name="percent_discount";
export const id="dl_b76e2ac5b4f338c61aab";
export const url=new URL("../icons/percent_discount.svg?v=008b317209d4247859f2ace420a98b95200f5ae07b9777126262117a8c76b524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
