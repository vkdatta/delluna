export const name="lucid_2-hard-drive";
export const id="dl_ea5e7c000d154ecd90aa";
export const url=new URL("../icons/lucid_2-hard-drive.svg?v=49bffbfb257255abdd84f2e890e3c3d8feab0a2ae9fd05030811c5750fc882f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
