export const name="dns";
export const id="dl_d3fde7722e75e9a7f5e2";
export const url=new URL("../icons/dns.svg?v=67889191de6ca55ca8e45206e1084658ad10b7f5c844e1f22b0e8cf22cd20d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
