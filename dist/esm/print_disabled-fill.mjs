export const name="print_disabled-fill";
export const id="dl_b5ff6c3a5c23773f5535";
export const url=new URL("../icons/print_disabled-fill.svg?v=a891081dc2210cb1b730eb735bd4fa106aeb6764b45c369ce56a24c0c3644969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
