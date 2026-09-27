export const name="phone_disabled-fill";
export const id="dl_498d56f1637325e13703";
export const url=new URL("../icons/phone_disabled-fill.svg?v=a6afb1efbb10fe423d68a39606c4557bed656dca97f82838f7d7565ff61edee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
