export const name="separator";
export const id="dl_02f009b66c204feea951";
export const url=new URL("../icons/separator.svg?v=4df47b993ed5225f79e9b1c32e496a74a72c57d2459801fd16ae30a4228a30a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
