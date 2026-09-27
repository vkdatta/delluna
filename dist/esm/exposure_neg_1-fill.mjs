export const name="exposure_neg_1-fill";
export const id="dl_490697be214bced72c45";
export const url=new URL("../icons/exposure_neg_1-fill.svg?v=b15ab20b2de83b293df58c3f0752e6424f16e36edc202ed2dd8941dcaad6b8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
