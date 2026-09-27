export const name="lucid_2-expand";
export const id="dl_97b17f5b806143ae9187";
export const url=new URL("../icons/lucid_2-expand.svg?v=a5a5f5dbe0726504aa211deca4e3b05bef5aedb2589d66490596b9e7bc491d2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
