export const name="apple-logo-fill";
export const id="dl_5896570ebed7436a86d5";
export const url=new URL("../icons/apple-logo-fill.svg?v=b0acb2b7d4c1d6aaf9ff551bcad3a564dde6af497cd0c05600e1760ffb6839dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
