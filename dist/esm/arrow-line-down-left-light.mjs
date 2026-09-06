export const name="arrow-line-down-left-light";
export const id="dl_ff6711cae6ad459183bd";
export const url=new URL("../icons/arrow-line-down-left-light.svg?v=2ca03fc93c72b1d9896f4e9de999b52554edc6336f1c94e77d12dd8be6e04b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
