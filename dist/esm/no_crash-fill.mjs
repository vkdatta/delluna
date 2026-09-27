export const name="no_crash-fill";
export const id="dl_2e8a3d590a3752ab9b15";
export const url=new URL("../icons/no_crash-fill.svg?v=b4b1a7d79ba47d7c161d63ab6b9662cc0c48a73a2dce066b43beb2327dbcd065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
