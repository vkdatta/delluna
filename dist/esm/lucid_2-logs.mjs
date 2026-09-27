export const name="lucid_2-logs";
export const id="dl_3f4efef5c7464ec59382";
export const url=new URL("../icons/lucid_2-logs.svg?v=72996e9d7f294c381853458b6b212888acf6417d4f534ef4ee9ad807ee2c03c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
