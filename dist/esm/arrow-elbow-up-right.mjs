export const name="arrow-elbow-up-right";
export const id="dl_f1b6d6955ec444adb7e6";
export const url=new URL("../icons/arrow-elbow-up-right.svg?v=f3bb07d43ec08dcb4d18d4638f98fb223c64fa3ac5e13847495873ed7466bf92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
