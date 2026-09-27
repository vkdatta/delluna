export const name="bookmark_manager";
export const id="dl_69b05fde1b8c9d3ac01a";
export const url=new URL("../icons/bookmark_manager.svg?v=f794af51f78b777ced8bd46191b885eaded968f13b5f0157653aff1c4f10d860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
