export const name="blur_medium-fill";
export const id="dl_c213ce4ddd9c86a32882";
export const url=new URL("../icons/blur_medium-fill.svg?v=065c5650747dd73ab3def812d9ee1eebfb8e3fe4111e2ec37aac9bfff1f4a5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
