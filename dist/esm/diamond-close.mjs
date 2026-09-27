export const name="diamond-close";
export const id="dl_a47ecc51ef610130ea96";
export const url=new URL("../icons/diamond-close.svg?v=46b1ade824c7542471a31e6403540314442fcd4197508609f8bf904238530959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
