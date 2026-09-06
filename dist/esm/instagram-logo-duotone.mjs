export const name="instagram-logo-duotone";
export const id="dl_8ec4eb473852450d85bf";
export const url=new URL("../icons/instagram-logo-duotone.svg?v=43bef761177b0b7335eebff931cd17f02ab5577e253ac5a72822473562a1e4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
