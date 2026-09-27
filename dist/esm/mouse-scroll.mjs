export const name="mouse-scroll";
export const id="dl_03c327b6fb724562bd21";
export const url=new URL("../icons/mouse-scroll.svg?v=ccad61db78065ca9af05260426aa539d86a82f9c3d10de4fc6a7ad0d1b5c6ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
