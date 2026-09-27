export const name="hearing_aid-fill";
export const id="dl_0805b62a91b57382759e";
export const url=new URL("../icons/hearing_aid-fill.svg?v=2653f10dde42d9be101a9803f1e0bb8468e74c30f086836254dc0b8ef47dd4ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
