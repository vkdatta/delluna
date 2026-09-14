export const name="assistant_device";
export const id="dl_d3bff9c1a8d74117ab48";
export const url=new URL("../icons/A/assistant_device.svg?v=362d5ed46152c47f46a756751ec3ca63b466339dbae3e707c7f9379f68a790e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
