export const name="format_ink_highlighter-fill";
export const id="dl_fd85e9775d2d1ae4f3d8";
export const url=new URL("../icons/format_ink_highlighter-fill.svg?v=8873fd13c0ccd4af20858794c1f660c75399a0b20c34e0e567a4b520490911eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
