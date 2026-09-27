export const name="format_image_break_right-fill";
export const id="dl_012a9423959c130b8089";
export const url=new URL("../icons/format_image_break_right-fill.svg?v=971b58da1460f1bf9c1a7e297ba8aab821b2e468914a8f5aac6d9da5566e4ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
