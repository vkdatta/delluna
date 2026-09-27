export const name="expand_circle_right";
export const id="dl_2d2b453af6db39d96396";
export const url=new URL("../icons/expand_circle_right.svg?v=ada2dfecf9eff59936a01ae17f86c592b2cb95b4671493f4f6ffbc29ff47b307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
