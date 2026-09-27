export const name="copyright-fill";
export const id="dl_5c9c9c6bb1234aeb9ea4";
export const url=new URL("../icons/copyright-fill.svg?v=50b2b6ebce5cd1b29efa8abbdb7f66587ef835ca21fe3355919e32916c5e7500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
