export const name="bookmark-simple-duotone";
export const id="dl_f7bd74c59a7d4e5e9aef";
export const url=new URL("../icons/bookmark-simple-duotone.svg?v=b560161da8079c67c381dcfd1ae69b39e8eed3815370cf2adc6ba4b3bea04aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
