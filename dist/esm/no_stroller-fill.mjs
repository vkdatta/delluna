export const name="no_stroller-fill";
export const id="dl_e6da7f2ead3648ebc1bf";
export const url=new URL("../icons/no_stroller-fill.svg?v=77a520153b0e2bb2c818ee9f0f7503423e5fc1ccc4958e018878d71645e3c25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
