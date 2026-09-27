export const name="push-pin-slash";
export const id="dl_35f22e0f4a1147e88a34";
export const url=new URL("../icons/push-pin-slash.svg?v=7e35af4d72452fe2e9871ad91b79c8590fa165ba2c27160890611c0e9ecaac08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
