export const name="no_adult_content-fill";
export const id="dl_aaed65be679a968bfd15";
export const url=new URL("../icons/no_adult_content-fill.svg?v=8c709555858623ebe8e115eaf8612ca753725b36780c0c4a22f3ba302062a47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
