export const name="magic-wand-bold";
export const id="dl_c4fa2fec5395491588b6";
export const url=new URL("../icons/magic-wand-bold.svg?v=56a5c4c344492c82178b0262ca9fdb333a26ac4813ee1f9cfd9774b9c3c27ecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
