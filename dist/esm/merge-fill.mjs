export const name="merge-fill";
export const id="dl_93e43491eb18022cdcd1";
export const url=new URL("../icons/merge-fill.svg?v=4653b27977335cf628edd510a40b6a6d4418f5f19fcaaf38665a8cd2a72de788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
