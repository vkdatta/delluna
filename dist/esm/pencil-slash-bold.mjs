export const name="pencil-slash-bold";
export const id="dl_b59773474fe6499780b9";
export const url=new URL("../icons/pencil-slash-bold.svg?v=5433c94e535f87414eae9989751d4d9d4be40154c03b3de916e57724ee31131f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
