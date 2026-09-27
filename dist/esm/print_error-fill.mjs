export const name="print_error-fill";
export const id="dl_22d4fad3dd83085a1218";
export const url=new URL("../icons/print_error-fill.svg?v=2834db719b608cc5158c0c8641cecfd470c6470aff06e2886a266c6c8aed4a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
