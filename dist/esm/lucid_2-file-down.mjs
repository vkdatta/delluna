export const name="lucid_2-file-down";
export const id="dl_24930fe90af4415e90c2";
export const url=new URL("../icons/lucid_2-file-down.svg?v=3780e9453b3a64254a9f13ab8c4443cbc964025f9d8095869022f50060e46607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
