export const name="format_image_break_right";
export const id="dl_b9c4e3ea14e1dcf7d890";
export const url=new URL("../icons/format_image_break_right.svg?v=dd85c8ffb114a534479cf9300f67f1abe10d9e15048b9edecdb746ce5f8ee4b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
