export const name="bug-droid-light";
export const id="dl_50e3f8f7245f42d592d9";
export const url=new URL("../icons/bug-droid-light.svg?v=507acac3ba261adb8520798cd7daf265ebdf1e74ea1bec5ee5443c98fb56d465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
