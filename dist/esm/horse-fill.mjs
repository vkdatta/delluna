export const name="horse-fill";
export const id="dl_7c4c843d0b8d42feb3c6";
export const url=new URL("../icons/horse-fill.svg?v=294a6886d9122ecf74de69b84780d984f5db526ef6c06fe0b81ec8d2046ffcec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
