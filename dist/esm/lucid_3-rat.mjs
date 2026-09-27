export const name="lucid_3-rat";
export const id="dl_2ec2edbd4f3945abbfd3";
export const url=new URL("../icons/lucid_3-rat.svg?v=22fb33e5e3415167a1659fbdaed61857d2e4d748e44a594f645cd5df5e26fdde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
