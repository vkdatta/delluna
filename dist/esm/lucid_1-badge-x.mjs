export const name="lucid_1-badge-x";
export const id="dl_2e7448e053b547c4a67c";
export const url=new URL("../icons/lucid_1-badge-x.svg?v=fea44800ae4a1f325f8bde9a73fee9d6632fa86444eac0a72868cdf681bd5e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
