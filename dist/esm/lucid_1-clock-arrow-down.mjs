export const name="lucid_1-clock-arrow-down";
export const id="dl_b15fb9055f6141068f8c";
export const url=new URL("../icons/lucid_1-clock-arrow-down.svg?v=ec49aed26ec5d43a7b260b2049223ae22f8893e3e63d7e7b01564f3fa2282dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
