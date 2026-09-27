export const name="data_table";
export const id="dl_a3880d9c4f2717fa94dd";
export const url=new URL("../icons/data_table.svg?v=4e7b619ac5218a772332859e67257cf71fd82713fccee108b527071e8373c1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
