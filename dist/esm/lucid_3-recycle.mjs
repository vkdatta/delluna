export const name="lucid_3-recycle";
export const id="dl_fb5ec6e4e9474553985e";
export const url=new URL("../icons/lucid_3-recycle.svg?v=d03ea1ee4ffcf22586821a26d809622397964e2ce5494b3b3b128eabc7d93a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
