export const name="ink_highlighter_off-fill";
export const id="dl_4a15f62a954d36e9f8aa";
export const url=new URL("../icons/ink_highlighter_off-fill.svg?v=fe1ffe7cd8482ea1364f1099c7716b7dcb36b46b4635fdd9a4226fdbc3eabdce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
