export const name="star-and-crescent-fill";
export const id="dl_5919d57ea52cc437bca0";
export const url=new URL("../icons/star-and-crescent-fill.svg?v=1c21c9ead07b5f8a2bcf123e363a40777e603b1e166ac4841fd00e872e87fb06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
