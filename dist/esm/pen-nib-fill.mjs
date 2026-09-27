export const name="pen-nib-fill";
export const id="dl_1bc351bae41b467097d5";
export const url=new URL("../icons/pen-nib-fill.svg?v=42966917a9bb8240d3fb1dc7cfe3ad3d15f7532985eb853080a3a6c9c1bdf820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
