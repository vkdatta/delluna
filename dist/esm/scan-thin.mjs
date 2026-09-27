export const name="scan-thin";
export const id="dl_13758e5f6fcb27e0c697";
export const url=new URL("../icons/scan-thin.svg?v=6646caf19c613dc65271e364fcb0ac1d4dba2cd39f89b95dbfdcdc63540e3dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
