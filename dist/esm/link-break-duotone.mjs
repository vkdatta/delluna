export const name="link-break-duotone";
export const id="dl_7f1e61c5a2f14a0aaf97";
export const url=new URL("../icons/link-break-duotone.svg?v=e9ee18a91b542f10aa941692fe77c5d40a259fab18c8d5785a943a8cb3c68b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
