export const name="unpublished";
export const id="dl_37d8a4771b50f72e7cdf";
export const url=new URL("../icons/unpublished.svg?v=c51c4b9acfec65670afbb69dda98ed371a0b71648855d3869b94f957f825f2b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
