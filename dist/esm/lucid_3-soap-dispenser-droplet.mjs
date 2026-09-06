export const name="lucid_3-soap-dispenser-droplet";
export const id="dl_44e31384f7a947428881";
export const url=new URL("../icons/lucid_3-soap-dispenser-droplet.svg?v=d079ef87835eac9821a1cc366aca3a59fcd6ef0e1828e2e3306b74a1517f4653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
