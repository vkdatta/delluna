export const name="lucid_3-monitor-up";
export const id="dl_740f1a251d3844789d2f";
export const url=new URL("../icons/lucid_3-monitor-up.svg?v=c3ff4396128598cee94681bbcaa978be4b223c41ae4b0c4fbf23e66d35ad5955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
