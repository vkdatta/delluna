export const name="desktop-fill";
export const id="dl_a3e5cddad80a45abab30";
export const url=new URL("../icons/desktop-fill.svg?v=aff6ce463c312f9e0d2e3eaeb0e1a5f025b155e454eb44112176e92ad1399300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
