export const name="lucid_3-rat";
export const id="dl_2ec2edbd4f3945abbfd3";
export const url=new URL("../icons/lucid_3-rat.svg?v=5145dd78684467e3e5ab6b1a88e69d46fa38509e5569bad92106aa512fff0b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
