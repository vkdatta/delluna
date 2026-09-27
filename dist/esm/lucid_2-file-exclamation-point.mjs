export const name="lucid_2-file-exclamation-point";
export const id="dl_217e7210f1374096beea";
export const url=new URL("../icons/lucid_2-file-exclamation-point.svg?v=8f1b1acd6445482fe106c62eb0ff93505cbe3c9f991fa526b61e807cffcf90b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
