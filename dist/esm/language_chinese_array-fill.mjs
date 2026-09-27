export const name="language_chinese_array-fill";
export const id="dl_a4d48027560ccfb9ff8c";
export const url=new URL("../icons/language_chinese_array-fill.svg?v=ec769914ebd9ba3518a5da47545b60fb969e24428dcaa63ef0225b106a2f877f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
