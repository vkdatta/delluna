export const name="hearing_aid_disabled_left";
export const id="dl_7aa875b301e04cbfbb01";
export const url=new URL("../icons/hearing_aid_disabled_left.svg?v=8760e13b4cf2dd12398548f7ce54806aec7fef2c61f5d5aad1d1b22556e8310b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
