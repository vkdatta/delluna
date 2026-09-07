export const name="square-logo-duotone";
export const id="dl_007e297c2a2f4940a386";
export const url=new URL("../icons/S/square-logo-duotone.svg?v=318c52d22afb596b341284a7e36de90634557d927faa4d4f2b215f451c5c3e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
