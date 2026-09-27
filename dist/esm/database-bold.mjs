export const name="database-bold";
export const id="dl_bea5ab645f774634a484";
export const url=new URL("../icons/database-bold.svg?v=673999e92df399301ccc8d1e2c20920d12f99fc497271e9dc8900847bf721e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
