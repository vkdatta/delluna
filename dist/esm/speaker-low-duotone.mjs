export const name="speaker-low-duotone";
export const id="dl_be4547c80fcdbb9263fa";
export const url=new URL("../icons/speaker-low-duotone.svg?v=de74f2065dfe5504d5fa9395b95933ae591ebca7a12105cd7adb2c5181d38a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
