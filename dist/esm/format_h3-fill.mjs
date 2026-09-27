export const name="format_h3-fill";
export const id="dl_3f8fbf19f2b7d028312a";
export const url=new URL("../icons/format_h3-fill.svg?v=f28611dd3d275ac4a15d4c38d9d11c260f61410e8fe65a452fc820f86dd4d515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
