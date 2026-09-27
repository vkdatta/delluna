export const name="insert_chart";
export const id="dl_d7836f607e575da83ad1";
export const url=new URL("../icons/insert_chart.svg?v=d20f1453ed58db295549bb08f616841db8cda501b77d1fcd894677bcd3b9f1cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
