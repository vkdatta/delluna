export const name="seal-warning-bold";
export const id="dl_20b7086e3383752fe4c7";
export const url=new URL("../icons/seal-warning-bold.svg?v=ea858b8a831f32b4282766ba519626a4499e2f4b07cd16522bb0f726b40234cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
