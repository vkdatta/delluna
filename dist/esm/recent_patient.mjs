export const name="recent_patient";
export const id="dl_c01adbb31b1fb0eb9508";
export const url=new URL("../icons/recent_patient.svg?v=638da5652540f7dce0bddea69cd8b5a5778b48d70ca759841fe6c2c5b7118f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
