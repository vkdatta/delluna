export const name="graduation-cap";
export const id="dl_86a330892792430d9795";
export const url=new URL("../icons/graduation-cap.svg?v=c3b0da1fb88a04623e87f3c9d5a8c1c9ee397601bd62520d2a714a931dc5bb19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
