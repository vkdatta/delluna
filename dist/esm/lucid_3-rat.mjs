export const name="lucid_3-rat";
export const id="dl_2ec2edbd4f3945abbfd3";
export const url=new URL("../icons/lucid_3-rat.svg?v=cf1f4c3ef5ef2af45daf15a69fa2910d62cf2a253493d1901494ef2d9af83303",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
