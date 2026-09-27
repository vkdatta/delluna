export const name="house-line-light";
export const id="dl_6dd126b446e74098806e";
export const url=new URL("../icons/house-line-light.svg?v=ccac44c6b9bde8390073a15841a14ed3201b343b2b0895fff4801ac81299d296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
