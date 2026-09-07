export const name="text-h-two";
export const id="dl_760b145638ca4344ae00";
export const url=new URL("../icons/T/text-h-two.svg?v=d11f71f8a1adf69a3af0bc79459ccaa1f55e1ccac04ba64bf956a1ce38c523da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
