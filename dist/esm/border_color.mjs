export const name="border_color";
export const id="dl_b4cc071169564a9e9f34";
export const url=new URL("../icons/B/border_color.svg?v=f1eafb9b9b874f4a6978d62a2c7a5e6035269859ef0da5509901f325c1d878e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
