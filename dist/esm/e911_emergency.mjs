export const name="e911_emergency";
export const id="dl_5d0812853e904a0590db";
export const url=new URL("../icons/E/e911_emergency.svg?v=a5e5b136d5a91dde46dd94221360a86be0e1cc3f7c246ec90790dde60dc2855b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
