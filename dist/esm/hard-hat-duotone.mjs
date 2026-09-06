export const name="hard-hat-duotone";
export const id="dl_700bd29af3a74c658ab3";
export const url=new URL("../icons/hard-hat-duotone.svg?v=d40c91a343a3330e547ec49110b5ef305d2c082bf0bfaf49736771022d5b79d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
