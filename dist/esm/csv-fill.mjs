export const name="csv-fill";
export const id="dl_70f3ddd97d8ed82b52a7";
export const url=new URL("../icons/csv-fill.svg?v=6a4244b07a4466878d2300a0fe2880bf9928d01a04ff9bc3892154274f3ce9f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
