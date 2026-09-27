export const name="fit_page_height-fill";
export const id="dl_cce21db1b538a9442b06";
export const url=new URL("../icons/fit_page_height-fill.svg?v=2e18cef8902f636b265ca2d586293dcbde20ca7a009b25ceed6d401c86d8a7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
