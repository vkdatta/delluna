export const name="ophthalmology-fill";
export const id="dl_b886782d53ee8c735ce3";
export const url=new URL("../icons/ophthalmology-fill.svg?v=7374c5088c788233fd7248795beda0961533d8e71926725630499250bb836233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
