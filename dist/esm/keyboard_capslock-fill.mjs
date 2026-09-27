export const name="keyboard_capslock-fill";
export const id="dl_4f4960c2470736001ddd";
export const url=new URL("../icons/keyboard_capslock-fill.svg?v=045ea973de81e198db5eed440de283b8f455448532af708890365a63f4778200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
