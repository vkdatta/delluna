export const name="chalkboard-teacher";
export const id="dl_318011005a4945c99ff3";
export const url=new URL("../icons/chalkboard-teacher.svg?v=128d4f0820f83a9659dd6522f5adb84f5c1bd1cb5929f9bc3ca8e84a69171350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
