export const name="speaker_3-fill";
export const id="dl_ba89d559917816108591";
export const url=new URL("../icons/speaker_3-fill.svg?v=722223e39813d2432ddaa8e72b3089ade5efa1f8e96fcd401d2e5ae5e85c0a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
