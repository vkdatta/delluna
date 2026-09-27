export const name="golf-duotone";
export const id="dl_d1c0a8daa7bd480cafad";
export const url=new URL("../icons/golf-duotone.svg?v=7c36e580aac6f922c924f13ccb33f8414b616118612424ec061ad163feb553ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
