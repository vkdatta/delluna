export const name="lucid_3-sailboat";
export const id="dl_a7564e1b67d84cb6befc";
export const url=new URL("../icons/lucid_3-sailboat.svg?v=54380ef982ba2d4a9f6242622d9d4b24e65abc477eae6869c5baf37797bb0dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
