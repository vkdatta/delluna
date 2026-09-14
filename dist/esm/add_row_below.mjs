export const name="add_row_below";
export const id="dl_e06a4b44b4634cb5baa0";
export const url=new URL("../icons/A/add_row_below.svg?v=57d8f12b78f420e3ed3ae78b12145f3ecf2cff0328d11d9c8664ef414ec53237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
