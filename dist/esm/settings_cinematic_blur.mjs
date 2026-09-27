export const name="settings_cinematic_blur";
export const id="dl_45ba48ff267f1ec6828b";
export const url=new URL("../icons/settings_cinematic_blur.svg?v=166c8f9a99f09215b7516e8720c7c88ab4c42ec54689cd8e8b627fbaeaff10c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
