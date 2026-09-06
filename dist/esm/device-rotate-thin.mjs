export const name="device-rotate-thin";
export const id="dl_eac715be3d324b7badf8";
export const url=new URL("../icons/device-rotate-thin.svg?v=32a6d079980b8d4b11e90619d0fee4a3a396b37f891db82be9fede9d021a15d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
