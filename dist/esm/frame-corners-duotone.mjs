export const name="frame-corners-duotone";
export const id="dl_d8af9f65e9e548c49c9f";
export const url=new URL("../icons/frame-corners-duotone.svg?v=5cb82bdb3a081154d23fa17e1859878d25089e7daf032f135bdc6ce68093a6aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
