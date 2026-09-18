export const name="markdown-fill";
export const id="dl_a495ffd0b0c34f968013";
export const url=new URL("../icons/M/markdown-fill.svg?v=866716f26d1ede6bf2510e5371f40c20ac31085c5d2d564e8a85affb2d0b8e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
