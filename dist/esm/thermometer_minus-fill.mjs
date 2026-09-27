export const name="thermometer_minus-fill";
export const id="dl_6832307f11964ecd7b1b";
export const url=new URL("../icons/thermometer_minus-fill.svg?v=dfc1196fe7c5d716d209effd47603715ee79372b7f996b26d9a549d2f24424fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
