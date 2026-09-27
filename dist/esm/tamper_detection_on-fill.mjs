export const name="tamper_detection_on-fill";
export const id="dl_1b0f7aa35a75975c6b6c";
export const url=new URL("../icons/tamper_detection_on-fill.svg?v=fe383a599ae7b4d7fc081233a38bb03473b9549089e6bfc7947f2fafbeb5918f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
