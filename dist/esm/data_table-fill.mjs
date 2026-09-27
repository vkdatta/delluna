export const name="data_table-fill";
export const id="dl_4c9d7a8994a26057a6a3";
export const url=new URL("../icons/data_table-fill.svg?v=640dfb02e55727699585f4e4321b68f3f9298f7d9e2c1f8cda80fc1b021ebdea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
