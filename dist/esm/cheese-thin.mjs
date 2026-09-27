export const name="cheese-thin";
export const id="dl_125636cacf66482da056";
export const url=new URL("../icons/cheese-thin.svg?v=504ee5b1cc7a64d76257444a80533420e3d8d7774533d035f818f13cbc42cc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
