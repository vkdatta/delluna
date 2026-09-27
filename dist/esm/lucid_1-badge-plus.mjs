export const name="lucid_1-badge-plus";
export const id="dl_43facf343f4e414a98f1";
export const url=new URL("../icons/lucid_1-badge-plus.svg?v=b431735945b635663a432f8fbef9d047c38daf273fadc549e80782daf2d30f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
