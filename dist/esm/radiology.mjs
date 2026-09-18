export const name="radiology";
export const id="dl_90ad7a87108242c0aa8f";
export const url=new URL("../icons/radiology.svg?v=66df6b91db4996e988e8f6cc2fc7bc22aa38c988e11a2cfd12b0dd93dca6fdb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
