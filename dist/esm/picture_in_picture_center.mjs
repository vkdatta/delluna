export const name="picture_in_picture_center";
export const id="dl_f5d6cced5d012253df3b";
export const url=new URL("../icons/picture_in_picture_center.svg?v=10cacfe1d1d48dacffc2923d8c40557622dbd58ff027d298374e9280e92585a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
