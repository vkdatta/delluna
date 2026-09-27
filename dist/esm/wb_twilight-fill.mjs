export const name="wb_twilight-fill";
export const id="dl_1eb240284a92ee20a4db";
export const url=new URL("../icons/wb_twilight-fill.svg?v=89724a0d8449dff47399f4b54c3ef87d73ca3187dbf905b1577544fc1877269b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
