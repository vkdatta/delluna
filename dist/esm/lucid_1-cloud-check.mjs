export const name="lucid_1-cloud-check";
export const id="dl_2b3afa16cb0449db8937";
export const url=new URL("../icons/lucid_1-cloud-check.svg?v=94d985ca8f12f0ccb4d19ae6958f18bda920fbd86884b7f37cf7bbf523886dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
