export const name="outpatient_med-fill";
export const id="dl_3f16a9254d8e36a2c828";
export const url=new URL("../icons/outpatient_med-fill.svg?v=388d759911ca61c9a73c01563ff730664160a398315ad0dd5624a67b10f1c456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
