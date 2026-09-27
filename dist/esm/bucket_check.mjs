export const name="bucket_check";
export const id="dl_5eb70a87736ab01f0c59";
export const url=new URL("../icons/bucket_check.svg?v=b1a1d43c23ff10fe718202e9b1ac3b9210e9cb5a075adf7da02da83739d37ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
