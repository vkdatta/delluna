export const name="fingerprint_off-fill";
export const id="dl_60cb0667b3b94d4e9ffe";
export const url=new URL("../icons/fingerprint_off-fill.svg?v=defb33fd6f7b012337900168a031837898ed74099cc7badb124326a914cfb663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
