export const name="bug-droid-light";
export const id="dl_50e3f8f7245f42d592d9";
export const url=new URL("../icons/bug-droid-light.svg?v=a30500c5f835b6655d0bd77e870e70ad29cb5aaef835fe393fc5816395426ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
