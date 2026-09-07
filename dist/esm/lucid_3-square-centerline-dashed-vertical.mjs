export const name="lucid_3-square-centerline-dashed-vertical";
export const id="dl_eece36c07d2048a0a62e";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-vertical.svg?v=aa708948270d0da1890b7c8510845a9b4b692cf526e744474eb6031279a65375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
