export const name="equal-fill";
export const id="dl_edab0ddd0c9bab9b1964";
export const url=new URL("../icons/equal-fill.svg?v=8fe5e822a5437b400b7ba5110027507f0ca728a2ca7d74bd2b655add043da928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
