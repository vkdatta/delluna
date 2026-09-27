export const name="x-logo-duotone";
export const id="dl_b65ee5c36bcb50d0e343";
export const url=new URL("../icons/x-logo-duotone.svg?v=ce74e051ba826b6c773f8714b1fee090ad2b305ef791db51ccc75c6f904c30e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
