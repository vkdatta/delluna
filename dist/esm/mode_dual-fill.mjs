export const name="mode_dual-fill";
export const id="dl_84fccd5871f1abeea5e9";
export const url=new URL("../icons/mode_dual-fill.svg?v=ea54a2a9f1a39742e65468f96e2859b9ab019d20e477f478242256662176f2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
