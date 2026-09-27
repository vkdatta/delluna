export const name="format_ink_highlighter-fill";
export const id="dl_545439b4dfcdeb6ba573";
export const url=new URL("../icons/format_ink_highlighter-fill.svg?v=8f6486dd5d2870198cb668d6613bc11ae7b1048674d0614e7e0296d5205702bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
