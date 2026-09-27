export const name="line_style";
export const id="dl_08f896f09e58f17bb058";
export const url=new URL("../icons/line_style.svg?v=7b80b7b159041b40ad049778bc64c624742c6fa13d9c4e85058441f4b8af8de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
