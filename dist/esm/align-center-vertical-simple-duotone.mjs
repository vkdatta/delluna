export const name="align-center-vertical-simple-duotone";
export const id="dl_c4f090d52e69405eb1a0";
export const url=new URL("../icons/align-center-vertical-simple-duotone.svg?v=3d7cbb9dffbac1d16a1cce0dcf1d34e23d61a291d212e2bad404a17613316d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
