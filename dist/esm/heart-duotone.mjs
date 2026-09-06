export const name="heart-duotone";
export const id="dl_588ec46e8741403898cb";
export const url=new URL("../icons/heart-duotone.svg?v=b1bc538e4f7626a2af3b3ac3dca543d8f8e628e9b45991fc7acb63ccaf2c289e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
