export const name="soba";
export const id="dl_87cbec4d5459d2aec3c4";
export const url=new URL("../icons/soba.svg?v=9dba0f786d21e2fdc4cd79cab5b1d2afe7af217e7a355e870197d55cb77af430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
