export const name="file-minus-duotone";
export const id="dl_9733049a91cb460d8a06";
export const url=new URL("../icons/file-minus-duotone.svg?v=d182bd7f3c9e4c1d98af0d592774496df4fdc59ada3b4b624e078a2bc715ff54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
