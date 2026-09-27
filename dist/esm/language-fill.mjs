export const name="language-fill";
export const id="dl_8e980a0d4a7508f9d64d";
export const url=new URL("../icons/language-fill.svg?v=638d9a56cd59781ae0ad3785e2134ca6b061f609d1f1d1fdf499e39afda587c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
