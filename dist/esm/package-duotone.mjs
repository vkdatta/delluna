export const name="package-duotone";
export const id="dl_963eb808a6f744c795f1";
export const url=new URL("../icons/package-duotone.svg?v=80f74c91b7b1ed6053467e4bf51d390afda6596d5ee1159edea84621cd6bf846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
