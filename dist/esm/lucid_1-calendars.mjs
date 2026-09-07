export const name="lucid_1-calendars";
export const id="dl_b6237eed411a4a299800";
export const url=new URL("../icons/lucid_1-calendars.svg?v=7d11b27ba0da0368fcc887194f4c9b20fecf5e2c251cfa53ad0f4aa0c594962f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
