export const name="scan_delete-fill";
export const id="dl_13916c27911abb939306";
export const url=new URL("../icons/scan_delete-fill.svg?v=093a66b2b7ee793096ff5cc8e38c52662187f371b4e84e61c8623a1d469178eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
