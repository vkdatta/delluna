export const name="footprints-thin";
export const id="dl_9726602df91c403596df";
export const url=new URL("../icons/footprints-thin.svg?v=88bfeae00853cdc5ed16a4492727b1f50f7436a63c943354912cabc1c7283d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
