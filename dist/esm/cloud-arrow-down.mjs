export const name="cloud-arrow-down";
export const id="dl_381b9cce44c748b9b146";
export const url=new URL("../icons/cloud-arrow-down.svg?v=9fea95ea33c16a91d71b89565c054fe9bcd34a32a2e08a201d6000a4a700fb20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
