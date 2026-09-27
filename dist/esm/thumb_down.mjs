export const name="thumb_down";
export const id="dl_53dd88567888c6a645af";
export const url=new URL("../icons/thumb_down.svg?v=70405cc151f2acddf6d8b99414b0967d16c1b9d57109d2894ae18811a76eac11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
