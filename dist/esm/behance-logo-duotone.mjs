export const name="behance-logo-duotone";
export const id="dl_48e2b5bc5d044e79af92";
export const url=new URL("../icons/behance-logo-duotone.svg?v=6722668a77ecc71bb59ebb6326a280af1e45b453f57552a8f4c18b79f35e0695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
