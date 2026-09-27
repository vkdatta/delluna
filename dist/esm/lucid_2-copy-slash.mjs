export const name="lucid_2-copy-slash";
export const id="dl_b3c582f90c5849a2a14b";
export const url=new URL("../icons/lucid_2-copy-slash.svg?v=32d70635b283c02870de81ed844a819fc24e509d650dae835933269230ea4c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
