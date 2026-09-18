export const name="pinboard-fill";
export const id="dl_c9ad883902f546a8870b";
export const url=new URL("../icons/pinboard-fill.svg?v=a3385147806498325884a92612a12e0c55d6b1581edd7a64cbc7d61cff152543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
