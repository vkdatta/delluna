export const name="airplane-takeoff-bold";
export const id="dl_b72c6fed76e54169bcbd";
export const url=new URL("../icons/airplane-takeoff-bold.svg?v=c7adb8ebe4ec227d225c5c1a528999b0d716aa774ad620e32d40ea2114e0960f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
