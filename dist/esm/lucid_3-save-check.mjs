export const name="lucid_3-save-check";
export const id="dl_de00a7005192403f8628";
export const url=new URL("../icons/lucid_3-save-check.svg?v=4de6d4a1a2d023919399711b71be86f8ba745113ca531437873f68e329445a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
