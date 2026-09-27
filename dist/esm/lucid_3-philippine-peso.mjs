export const name="lucid_3-philippine-peso";
export const id="dl_0cc10c8dd53d45bcbe72";
export const url=new URL("../icons/lucid_3-philippine-peso.svg?v=140c8299f2efe8198f13a3749aaad8992afa250b72547cfe89d53f9ab5591907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
