export const name="arrow-elbow-up-right";
export const id="dl_f1b6d6955ec444adb7e6";
export const url=new URL("../icons/arrow-elbow-up-right.svg?v=ccda0c9b695401a45efca93b7a3b9e137103d58ba6d5def5d04dc7acf7f7d3a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
