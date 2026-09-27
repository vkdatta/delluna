export const name="warehouse-bold";
export const id="dl_fa5a48a7387c29ed2b37";
export const url=new URL("../icons/warehouse-bold.svg?v=36aacbaa87017b0a07f438c8329177315fac7ecdd32ae4b3f36340ae3ec73374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
