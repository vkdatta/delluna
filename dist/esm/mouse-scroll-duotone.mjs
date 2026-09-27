export const name="mouse-scroll-duotone";
export const id="dl_0c760a825d1e49a19221";
export const url=new URL("../icons/mouse-scroll-duotone.svg?v=7fdd7680a21d02e99a197ffe507504ec19409e942ee14b2d0afbb467c30533f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
