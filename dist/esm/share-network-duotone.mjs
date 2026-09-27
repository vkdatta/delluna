export const name="share-network-duotone";
export const id="dl_2016e5772c0112f5da74";
export const url=new URL("../icons/share-network-duotone.svg?v=e806dab4688632943b0b0fe5b60059dfca02c78015aa173feeb306bbeca012ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
