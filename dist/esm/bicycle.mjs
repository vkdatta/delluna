export const name="bicycle";
export const id="dl_ab2c0cfa484345ff96f4";
export const url=new URL("../icons/bicycle.svg?v=5830a596814df4e9ac4298e5889b8a6a7a2c56a49018f4faf1f1e2f8f824c14f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
