export const name="buildings-fill";
export const id="dl_7e647561b3334720b230";
export const url=new URL("../icons/buildings-fill.svg?v=96633112644de4b06f10f4c20e037440d7defa2306c630e5a4c2aeae394b2a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
