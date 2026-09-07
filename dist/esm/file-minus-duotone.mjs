export const name="file-minus-duotone";
export const id="dl_9733049a91cb460d8a06";
export const url=new URL("../icons/file-minus-duotone.svg?v=d6c40d7291ccf0138b71c46dc7d932b4d1dc4aec238bf41f0528c6e868a15d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
