export const name="arrow-elbow-up-right-duotone";
export const id="dl_4a0e2d4bf3374efe9cb5";
export const url=new URL("../icons/arrow-elbow-up-right-duotone.svg?v=6f2d182c643873027615191c2d3afefa9f8e69581fce916b53ff610e648a27b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
