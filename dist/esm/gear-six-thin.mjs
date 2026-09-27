export const name="gear-six-thin";
export const id="dl_b9b2b1e7956e4ef2b0b0";
export const url=new URL("../icons/gear-six-thin.svg?v=7b03515e5998e269062493eaba7d345ae33a5e3dca64516eff53c44c3639ccd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
