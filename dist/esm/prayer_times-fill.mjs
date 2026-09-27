export const name="prayer_times-fill";
export const id="dl_728e90395d55d52f028f";
export const url=new URL("../icons/prayer_times-fill.svg?v=b993ae800801ff48dca3cd7785ece8403fd0cb1db548f25f7241fe84ac40ab02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
