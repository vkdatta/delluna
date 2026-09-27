export const name="apple-logo-fill";
export const id="dl_5896570ebed7436a86d5";
export const url=new URL("../icons/apple-logo-fill.svg?v=2dbdd0e69afb7282fcd5d509d53755ab28fa5f787e4060e4d1dbd7865f201760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
