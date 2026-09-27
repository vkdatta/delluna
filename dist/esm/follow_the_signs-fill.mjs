export const name="follow_the_signs-fill";
export const id="dl_46a3b0fecd8d09e4cd26";
export const url=new URL("../icons/follow_the_signs-fill.svg?v=fb13adb0273d3d0b9f269b1db77ed5df04d351691d72d00d3e91afd951055b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
