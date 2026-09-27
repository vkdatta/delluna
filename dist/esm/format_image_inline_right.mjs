export const name="format_image_inline_right";
export const id="dl_1d891df0eb8123273de5";
export const url=new URL("../icons/format_image_inline_right.svg?v=098e41b56679c79d04c8e1abc4f3d3f8b019fd76d85086d54f255a43bbf4b990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
