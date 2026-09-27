export const name="microscope-light";
export const id="dl_3905478294e64209bd55";
export const url=new URL("../icons/microscope-light.svg?v=87c8505bf75ea760a112bde110e08d6113c671e488d90dc5da68fc548c31a55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
