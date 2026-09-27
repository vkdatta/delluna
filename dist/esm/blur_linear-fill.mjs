export const name="blur_linear-fill";
export const id="dl_480b0c1c9ebb70269cbb";
export const url=new URL("../icons/blur_linear-fill.svg?v=3696a79c8838db77777b62d108b2d179d5e101871e7e957e5f56331bdc3bd383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
