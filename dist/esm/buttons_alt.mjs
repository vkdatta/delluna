export const name="buttons_alt";
export const id="dl_0fdf05162ef1739c2c1c";
export const url=new URL("../icons/buttons_alt.svg?v=48be1f78096dd1ba0ad56fe034f76474b06ccbaf7be035c1a193e0bec6f84fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
