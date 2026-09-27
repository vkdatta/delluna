export const name="arrow-elbow-up-right";
export const id="dl_f1b6d6955ec444adb7e6";
export const url=new URL("../icons/arrow-elbow-up-right.svg?v=90c399f28bd592b6a041263447e276e1829e3c1ef71788c503982e9a9ef92ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
