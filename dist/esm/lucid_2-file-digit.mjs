export const name="lucid_2-file-digit";
export const id="dl_bdc6218ec225400c99c1";
export const url=new URL("../icons/lucid_2-file-digit.svg?v=07726989d26d9b51c07c45b59b801f5d3fb0c9c6f735204e64bfb18849fd43f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
