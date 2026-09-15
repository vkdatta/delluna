export const name="deceased";
export const id="dl_549c51d93c3e42768d5d";
export const url=new URL("../icons/D/deceased.svg?v=f0199666d4bd83dc1d607dccb2c07047d99a234024f97c2ff9b0fc654b26bf19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
