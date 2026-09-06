export const name="bounding-box-bold";
export const id="dl_134a9d38def045588264";
export const url=new URL("../icons/bounding-box-bold.svg?v=a1901f3be930f901b2803c410ff428fef6f1fb711867416489688ac30f0877d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
