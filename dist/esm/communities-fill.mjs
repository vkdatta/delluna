export const name="communities-fill";
export const id="dl_b2675a4a28e94f568433";
export const url=new URL("../icons/C/communities-fill.svg?v=24da87b1f8283f53a0c8d311af4065ff29008f5f563a02fcc668dd19daea3b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
