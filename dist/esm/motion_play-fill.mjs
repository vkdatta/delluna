export const name="motion_play-fill";
export const id="dl_71231f5617c878bc5a8f";
export const url=new URL("../icons/motion_play-fill.svg?v=52a3486419f2069af269ed7a77ecb581fbbae24c573838582e37bb47f6d23e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
