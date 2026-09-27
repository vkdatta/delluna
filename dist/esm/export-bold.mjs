export const name="export-bold";
export const id="dl_4d71f244b1944670b7e9";
export const url=new URL("../icons/export-bold.svg?v=b8a958aa7b8108e6c9e55db42ea3c508301d16daf3024bcf409f0042672fc00f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
