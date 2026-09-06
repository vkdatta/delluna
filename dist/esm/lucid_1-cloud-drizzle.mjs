export const name="lucid_1-cloud-drizzle";
export const id="dl_eac6a7011dcb45e1841b";
export const url=new URL("../icons/lucid_1-cloud-drizzle.svg?v=aa5619fa707d29153c49623edbdc279e8b2b1db7ef27ee030fe85796d5ffa884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
