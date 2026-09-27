export const name="screenshot_keyboard-fill";
export const id="dl_f5299bd2562b15245ed2";
export const url=new URL("../icons/screenshot_keyboard-fill.svg?v=56612c608ed6ebedf7cb413b718c950072bab5e9411a389a2b9519c56c386fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
