export const name="air_purifier";
export const id="dl_4190144cf9b5039bf146";
export const url=new URL("../icons/air_purifier.svg?v=4e060c3bbed380a0ca69d5f46c7f6308ac7102481caa974b597af77e9cfbc1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
