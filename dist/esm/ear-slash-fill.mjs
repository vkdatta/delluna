export const name="ear-slash-fill";
export const id="dl_dfdb2cf6479c40ebbda7";
export const url=new URL("../icons/ear-slash-fill.svg?v=d1fcb4c2997bcee4b4a2a1e254852ffa59095ac679d8b85c9368981e3c3d10a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
