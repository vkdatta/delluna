export const name="edit_square-fill";
export const id="dl_d28fa8ea9873d3e92566";
export const url=new URL("../icons/edit_square-fill.svg?v=60084d4a26d62290ec54af7436f47504f87c3ce77ed62da831d5bfb572670938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
