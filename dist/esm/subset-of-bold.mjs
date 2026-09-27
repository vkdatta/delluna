export const name="subset-of-bold";
export const id="dl_cafa4fc04393861204ab";
export const url=new URL("../icons/subset-of-bold.svg?v=fecf24e71925a7b81c370a154fbab67ee731ba14659e82b184fe8730af2e10ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
