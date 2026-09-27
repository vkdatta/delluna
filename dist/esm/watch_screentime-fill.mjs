export const name="watch_screentime-fill";
export const id="dl_8bf5aff6fc59b7d0bd25";
export const url=new URL("../icons/watch_screentime-fill.svg?v=499da0d21eb4652f0b0fecc331b2d842b24796f33a44c7c5ba0e8f86e5c3fb0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
