export const name="no_encryption-fill";
export const id="dl_cc6f579a59c77b7fa46d";
export const url=new URL("../icons/no_encryption-fill.svg?v=ec1e652dee8599fca027561fb3a676698e0af8a670ce0c25298f38b98dfc9f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
