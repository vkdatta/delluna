export const name="globe-hemisphere-east";
export const id="dl_84087174e9a84fda83b3";
export const url=new URL("../icons/globe-hemisphere-east.svg?v=af8a4d5c4bb688f564a952c921ddc2655db353b248a9ed34f385c7cb62f8f41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
