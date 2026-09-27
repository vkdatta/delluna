export const name="arrow_selector_tool-fill";
export const id="dl_8f331e615976736f0511";
export const url=new URL("../icons/arrow_selector_tool-fill.svg?v=8bf0562818d43c0dc6a68f32bcd1953d8f899ed9736cde07fc7eaaca479ded83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
